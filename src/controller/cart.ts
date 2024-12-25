import { Request, Response } from "express";



// Initialize the cart for session 
const initializeCart = async (req: Request, res: Response) => {
    // Process variables
    let proceed = true, content = null, message = null, status = 200

    console.log('Cart Initializing', req.params.cartID)

    res.status(201).json({
        proceed: proceed,
        content: content,
        message: message
    })
}


export {
    initializeCart
}