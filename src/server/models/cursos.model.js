import { pool } from '../database/db.js'

// Obtener un curso por ID
export const getCourse = async (id) => {
  try {
    console.log('Intentando obtener curso con ID:', id) // **Nuevo log para intento de obtener curso**
    const { rows } = await pool.query('SELECT * FROM cursos WHERE id = $1', [id])
    return rows[0]
  } catch (error) {
    throw new Error(`Error al obtener curso por ID: ${error.message}`)
  }
}

// Crear un nuevo curso
export const createCourse = async ({ titulo, descripcion, instructor, fecha_ini, fecha_fin }) => {
  if (!titulo || !descripcion || !instructor || !fecha_ini || !fecha_fin) {
    throw new Error('Se requieren todos los campos')
  }
  try {
    console.log('Intentando crear nuevo curso') // **Nuevo log para intento de crear curso**
    const { rows } = await pool.query(
      'INSERT INTO cursos (titulo, descripcion, instructor, fecha_ini, fecha_fin) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [titulo, descripcion, instructor, fecha_ini, fecha_fin]
    )
    return rows[0]
  } catch (error) {
    throw new Error(`Error al crear curso: ${error.message}`)
  }
}

// Actualizar un curso existente
export const updateCourse = async (id, { titulo, descripcion, instructor, fecha_ini, fecha_fin }) => {
  if (!titulo || !descripcion || !instructor || !fecha_ini || !fecha_fin) {
    throw new Error('Se requieren todos los campos')
  }
  try {
    console.log('Intentando actualizar curso con ID:', id) // **Nuevo log para intento de actualizar curso**
    const { rows } = await pool.query(
      'UPDATE cursos SET titulo = $1, descripcion = $2, instructor = $3, fecha_ini = $4, fecha_fin = $5 WHERE id = $6 RETURNING *',
      [titulo, descripcion, instructor, fecha_ini, fecha_fin, id]
    )
    return rows[0]
  } catch (error) {
    throw new Error(`Error al actualizar curso: ${error.message}`)
  }
}
