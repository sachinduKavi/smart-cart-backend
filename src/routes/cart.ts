import express from 'express'
const router = express.Router()

import { checkSecretKey } from '../middleware/authentication'
import { initializeCart } from '../controller/cart'


router.get('/initialize/:cartID', checkSecretKey, initializeCart)


router.get('/clearAllSockets', )


export default router


