import express from 'express'
const router = express.Router()

import { checkSecretKey } from '../middleware/authentication'
import { initializeCart, testCart } from '../controller/cart'


router.get('/initialize/:cartID', checkSecretKey, initializeCart)


router.get('/testCart', testCart)


export default router


