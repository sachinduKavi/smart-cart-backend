import { NextFunction, Request, Response } from "express"

require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY


// Authorize the cart 
const checkSecretKey = (next: NextFunction, req: Request, res: Response) => {
    console.log(req)
    next()
}

export {
    checkSecretKey
}
