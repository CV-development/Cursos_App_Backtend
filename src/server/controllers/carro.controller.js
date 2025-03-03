import * as sql from '../models/carro.model.js'

// Obtener todos los cursos en el carro de un usuario
export const getCarroByUserId = async (req, res) => {
  const { userId } = req.params
  try {
    const carro = await sql.getCarroByUserId(userId)
    if (!carro.length) {
      return res.status(404).json({ message: 'Carro vacío o usuario no encontrado' })
    }
    res.status(200).json(carro)
  } catch (error) {
    console.error('[getCarroByUserId] => error:', error)
    res.status(500).json({ message: error.message })
  }
}

// Agregar un curso al carro
export const addCourseToCarro = async (req, res) => {
  const { userId, courseId } = req.body
  try {
    const newCarroItem = await sql.addCourseToCarro(userId, courseId)
    res.status(201).json({ message: 'Curso agregado al carro exitosamente', carro: newCarroItem })
  } catch (error) {
    console.error('[addCourseToCarro] => error:', error)
    res.status(500).json({ message: error.message })
  }
}

// Eliminar un curso del carro
export const removeCourseFromCarro = async (req, res) => {
  const { userId, courseId } = req.body
  try {
    const removedCarroItem = await sql.removeCourseFromCarro(userId, courseId)
    if (!removedCarroItem) {
      return res.status(404).json({ message: 'Curso no encontrado en el carro' })
    }
    res.status(200).json({ message: 'Curso eliminado del carro exitosamente', carro: removedCarroItem })
  } catch (error) {
    console.error('[removeCourseFromCarro] => error:', error)
    res.status(500).json({ message: error.message })
  }
}
