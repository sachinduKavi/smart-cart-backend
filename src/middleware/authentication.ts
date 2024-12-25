import { NextFunction, Request, Response } from "express"
import {Server} from 'socket.io'

require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY


// Authorize the user device 
const checkSecretKey = (req: Request, res: Response, next: NextFunction) => {
    if(req.headers.authorization === SECRET_KEY) next();    
    else {
        res.status(400).json({
            proceed: false,
            content: null,
            message: 'UNAUTHORIZE'
        })
    }
}

export {
    checkSecretKey
}
