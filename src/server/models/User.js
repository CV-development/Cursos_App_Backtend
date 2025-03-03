import db from '../database/db.js' // Importa la conexión a PostgreSQL

const User = {
  async findByEmail(email) {
    const rows = await db('SELECT * FROM usuarios WHERE email = $1', [email])
    return rows[0] // Devuelve el primer usuario encontrado o undefined
  },

  async create({ email, password }) {
    const rows = await db(
      'INSERT INTO usuarios (email, password) VALUES ($1, $2) RETURNING *',
      [email, password]
    )
    return rows[0] // Devuelve el usuario recién creado
  }
}

export default User
