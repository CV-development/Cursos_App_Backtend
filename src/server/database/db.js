import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  allowExitOnIdle: true
}

const pool = new Pool(config)

// Agrega un mensaje de éxito o error
pool.on('connect', () => {
  console.log('Conexión a la base de datos exitosa')
})

pool.on('error', (err) => {
  console.error('Error en la conexión a la base de datos:', err)
})

const db = async (query, values) => {
  try {
    console.log('Ejecutando consulta:', query) // **Nuevo log para ejecución de consulta**
    const result = await pool.query(query, values)
    return result.rows
  } catch (error) {
    console.error('[db_connect] => db:', error)
    const newError = { status: false, message: error }
    throw newError
  }
}

export { pool }
export default db
