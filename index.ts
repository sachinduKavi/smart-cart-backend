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



// Handel client connection
io.on('connection', async (socket: Socket) => {
    console.log('Connected to socket:', socket.id)


    socket.on('message', (data) => {
        console.log(`Message from ${socket.id}`, data)

        // Respond to the client
        socket.emit('response', { message: 'Message received on the server!' });
    })


    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
})



httpServer.listen(PORT, () => {
    console.log(`App is running on port ${PORT}...`)
})