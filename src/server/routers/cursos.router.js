import { Router } from 'express'
import * as cursosController from '../controllers/cursos.controller.js'

const router = Router()

router.get('/:id', cursosController.getCourse)
router.post('/', cursosController.createCourse)
router.put('/:id', cursosController.updateCourse)

export default router
