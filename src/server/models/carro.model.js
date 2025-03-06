import { pool } from '../database/db.js'

// Obtener todos los cursos en el carro de un usuario
export const getCarroByUserId = async (userId) => {
  try {
    const { rows } = await pool.query('SELECT * FROM carro WHERE id_usuario = $1', [userId])
    return rows
  } catch (error) {
    throw new Error(`Error al obtener el carro por ID de usuario: ${error.message}`)
  }
}

// Agregar un curso al carro
export const addCourseToCarro = async (userId, courseId) => {
  try {
    const { rows } = await pool.query(
      'INSERT INTO carro (id_usuario, id_curso) VALUES ($1, $2) RETURNING *',
      [userId, courseId]
    )
    return rows[0]
  } catch (error) {
    throw new Error(`Error al agregar curso al carro: ${error.message}`)
  }
}

// Eliminar un curso del carro
export const removeCourseFromCarro = async (userId, courseId) => {
  try {
    const { rows } = await pool.query(
      'DELETE FROM carro WHERE id_usuario = $1 AND id_curso = $2 RETURNING *',
      [userId, courseId]
    )
    return rows[0]
  } catch (error) {
    throw new Error(`Error al eliminar curso del carro: ${error.message}`)
  }
}
