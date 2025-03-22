import express, { Request, Response } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { ProductInterface, product_list, BillInterface } from './src/models/products';
import { calculateTotalPrice } from './src/middleware/calculations';

const app = express()
const httpServer = createServer(app)

// Initialize the socket.io
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

require('dotenv').config()
const PORT = process.env.PORT || 3000

import cartRouter from './src/routes/cart'

// Middleware to parse JSON (if needed)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Client request
app.use('/cart', cartRouter)

// Clear all the sockets
app.get('/clearSockets', async (req: Request, res: Response) => {
    for (const [id, socket] of io.sockets.sockets) {
        socket.disconnect(true); // Forcefully disconnect the socket
        console.log(`Socket disconnected: ${id}`);
    }

    res.send('All sockets have been cleared');
} )






// Handel client connection
io.on('connection', async (socket: Socket) => {
    const cartID: string = socket.handshake.query.cartID?.toString() || ""
    let customerBill: BillInterface = {
        item_list: [],
        total: 0
    }
    console.log('Connection establish between', cartID, 'and', socket.id)

    socket.on(cartID, (data) => {
        console.log(`Message To ${cartID}`, data)
        console.log(data.item)
        if(data.sender === 'cart') { // Item send from the cart
            const product:ProductInterface | boolean = product_list.find(product => product.id === data.item) || false
            console.log('Product:', product)

            if(product) {
            // Check the item exists in the customer bill
                const itemIndex = customerBill.item_list.findIndex(item => item.id === data.item)
                if(itemIndex < 0) { // Item dose not exist in the bill
                    // Add the item to the bill
                    customerBill.item_list.push({
                        ...product,
                        quantity: 1
                    })
                } else {
                    // Update the quantity of the item
                    customerBill.item_list[itemIndex].quantity += 1
                }
            }

            // Calculate the total price
            customerBill.total = calculateTotalPrice(customerBill.item_list)
        }

        console.log('Customer Bill:', customerBill)
        // Respond to the client
        socket.emit(cartID, { message: 'Message received on the server!', bill: customerBill});
    })


    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
})



httpServer.listen(PORT, () => {
    console.log(`App is running on port ${PORT}...`)
})