import { Request, Response } from "express";



// Initialize the cart for session 
const initializeCart = (req: Request, res: Response) => {
    // Process variables
    let proceed = false, content = null, message = null, status = 200



    res.status(201).json({
        proceed: proceed,
        content: content,
        message: message
    })
}


export {
    initializeCart
}