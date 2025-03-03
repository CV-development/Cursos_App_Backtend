import * as sql from '../models/cursos.model.js'

// Obtener un curso por ID
export const getCourse = async (req, res) => {
  console.log('Ruta de obtener curso alcanzada')
  const { id } = req.params
  console.log('ID del curso:', id) // **Nuevo log para verificar el ID**

  try {
    const course = await sql.getCourse(id)
    if (!course) {
      console.log('Curso no encontrado') // **Nuevo log para curso no encontrado**
      return res.status(404).json({ message: 'Curso no encontrado' })
    }
    console.log('Curso encontrado:', course) // **Nuevo log para curso encontrado**
    res.status(200).json(course)
  } catch (error) {
    console.error('[getCourse] => error:', error)
    res.status(500).json({ message: error.message })
  }
}

// Crear un nuevo curso
export const createCourse = async (req, res) => {
  const { titulo, descripcion, instructor, fecha_ini, fecha_fin } = req.body
  console.log('Datos del nuevo curso:', req.body) // **Nuevo log para datos del curso**

  try {
    const newCourse = await sql.createCourse({ titulo, descripcion, instructor, fecha_ini, fecha_fin })
    console.log('Curso creado:', newCourse) // **Nuevo log para curso creado**
    res.status(201).json({ message: 'Curso creado exitosamente', course: newCourse })
  } catch (error) {
    console.error('[createCourse] => error:', error)
    res.status(500).json({ message: error.message })
  }
}

// Actualizar un curso existente
export const updateCourse = async (req, res) => {
  const { id } = req.params
  const { titulo, descripcion, instructor, fecha_ini, fecha_fin } = req.body
  console.log('ID del curso a actualizar:', id) // **Nuevo log para ID del curso a actualizar**
  console.log('Datos para actualizar:', req.body) // **Nuevo log para datos de actualización**

  try {
    const updatedCourse = await sql.updateCourse(id, { titulo, descripcion, instructor, fecha_ini, fecha_fin })
    if (!updatedCourse) {
      console.log('Curso no encontrado para actualizar') // **Nuevo log para curso no encontrado al actualizar**
      return res.status(404).json({ message: 'Curso no encontrado' })
    }
    console.log('Curso actualizado:', updatedCourse) // **Nuevo log para curso actualizado**
    res.status(200).json({ message: 'Curso actualizado exitosamente', course: updatedCourse })
  } catch (error) {
    console.error('[updateCourse] => error:', error)
    res.status(500).json({ message: error.message })
  }
}
