import { Request, Response } from "express";



// Initialize the cart for session 
const initializeCart = async (req: Request, res: Response) => {
    // Process variables
    let proceed = true, content = null, message = null, status = 201

    console.log('Cart Initializing', req.params.cartID)

    res.status(status).json({
        proceed: proceed,
        content: content,
        message: message
    })
}


const clearSockets = async (req: Request, res: Response) => {
    // Process variables
    let proceed = true, content = null, message = null, status = 201


    res.status(status).json({
        proceed: proceed,
        content: content,
        message: message
    })
}


export {
    initializeCart
}