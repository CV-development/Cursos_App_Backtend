// src/server/controllers/cursos.controller.js
import * as sql from '../models/cursos.model.js'

// Obtener todos los cursos
export const getAllCourses = async (req, res) => {
  console.log('Ruta de obtener todos los cursos alcanzada')

  try {
    const courses = await sql.getAllCourses()
    console.log('Cursos encontrados:', courses)
    res.status(200).json(courses)
  } catch (error) {
    console.error('[getAllCourses] => error:', error)
    res.status(500).json({ message: error.message })
  }
}

// Obtener un curso por ID
export const getCourse = async (req, res) => {
  console.log('Ruta de obtener curso alcanzada')
  const { id } = req.params
  console.log('ID del curso:', id)

  try {
    const course = await sql.getCourse(id)
    if (!course) {
      console.log('Curso no encontrado')
      return res.status(404).json({ message: 'Curso no encontrado' })
    }
    console.log('Curso encontrado:', course)
    res.status(200).json(course)
  } catch (error) {
    console.error('[getCourse] => error:', error)
    res.status(500).json({ message: error.message })
  }
}

// Crear un nuevo curso
export const createCourse = async (req, res) => {
  const { titulo, descripcion, instructor, fecha_ini, fecha_fin } = req.body
  console.log('Datos del nuevo curso:', req.body)

  try {
    const newCourse = await sql.createCourse({ titulo, descripcion, instructor, fecha_ini, fecha_fin })
    console.log('Curso creado:', newCourse)
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
  console.log('ID del curso a actualizar:', id)
  console.log('Datos para actualizar:', req.body)

  try {
    const updatedCourse = await sql.updateCourse(id, { titulo, descripcion, instructor, fecha_ini, fecha_fin })
    if (!updatedCourse) {
      console.log('Curso no encontrado para actualizar')
      return res.status(404).json({ message: 'Curso no encontrado' })
    }
    console.log('Curso actualizado:', updatedCourse)
    res.status(200).json({ message: 'Curso actualizado exitosamente', course: updatedCourse })
  } catch (error) {
    console.error('[updateCourse] => error:', error)
    res.status(500).json({ message: error.message })
  }
}
