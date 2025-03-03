import { pool } from '../database/db.js'

// Obtener un usuario por ID
export const getUser = async (id) => {
  try {
    const { rows } = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id])
    return rows[0]
  } catch (error) {
    throw new Error(`Error al obtener usuario por ID: ${error.message}`)
  }
}

// Crear un nuevo usuario
export const createUser = async ({ email, password, rol, nombre, apellido }) => {
  if (!email || !password || !rol || !nombre || !apellido) {
    throw new Error('Se requieren todos los campos')
  }
  try {
    const { rows } = await pool.query(
      'INSERT INTO usuarios (email, password, rol, nombre, apellido) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [email, password, rol, nombre, apellido]
    )
    return rows[0]
  } catch (error) {
    throw new Error(`Error al crear usuario: ${error.message}`)
  }
}

// Actualizar un usuario existente
export const updateUser = async (id, { email, password, rol, nombre, apellido }) => {
  if (!email || !password || !rol || !nombre || !apellido) {
    throw new Error('Se requieren todos los campos')
  }
  try {
    const { rows } = await pool.query(
      'UPDATE usuarios SET email = $1, password = $2, rol = $3, nombre = $4, apellido = $5 WHERE id = $6 RETURNING *',
      [email, password, rol, nombre, apellido, id]
    )
    return rows[0]
  } catch (error) {
    throw new Error(`Error al actualizar usuario: ${error.message}`)
  }
}
