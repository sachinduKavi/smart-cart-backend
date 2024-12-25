import express from 'express'
const router = express.Router()

import { checkSecretKey } from '../middleware/authentication'
import { initializeCart } from '../controller/cart'


router.post('initialize', checkSecretKey, initializeCart)



export default router


