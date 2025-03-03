import * as sql from '../models/user.model.js'

// Obtener un usuario por ID
export const getUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await sql.getUser(id)
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.status(200).json(user)
  } catch (error) {
    console.error('[getUser] => error:', error)
    res.status(500).json({ message: error.message })
  }
}

// Crear un nuevo usuario
export const createUser = async (req, res) => {
  const { email, password, rol, nombre, apellido } = req.body
  try {
    const newUser = await sql.createUser({ email, password, rol, nombre, apellido })
    res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser })
  } catch (error) {
    console.error('[createUser] => error:', error)
    res.status(500).json({ message: error.message })
  }
}

// Actualizar un usuario existente
export const updateUser = async (req, res) => {
  const { id } = req.params
  const { email, password, rol, nombre, apellido } = req.body
  try {
    const updatedUser = await sql.updateUser(id, { email, password, rol, nombre, apellido })
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.status(200).json({ message: 'Usuario actualizado exitosamente', user: updatedUser })
  } catch (error) {
    console.error('[updateUser] => error:', error)
    res.status(500).json({ message: error.message })
  }
}
