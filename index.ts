import express, { Request, Response } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

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
    console.log('Connection establish between', cartID, 'and', socket.id)

    socket.on(cartID, (data) => {
        console.log(`Message from ${socket.id}`, data)

        // Respond to the client
        socket.emit(cartID, { message: 'Message received on the server!' });
    })


    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
})



httpServer.listen(PORT, () => {
    console.log(`App is running on port ${PORT}...`)
})