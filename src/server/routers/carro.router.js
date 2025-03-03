import { Router } from 'express'
import { getCarroByUserId, addCourseToCarro, removeCourseFromCarro } from '../controllers/carro.controller.js'

const router = Router()

router.get('/:userId', getCarroByUserId)
router.post('/', addCourseToCarro)
router.delete('/', removeCourseFromCarro)

export default router
