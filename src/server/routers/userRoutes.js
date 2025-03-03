import { Router } from 'express'
import { getUser, createUser, updateUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/user/:id', getUser)
router.post('/user', createUser)
router.put('/user/:id', updateUser)

export default router
