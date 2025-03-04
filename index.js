import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { serverLog } from './src/server/middlewares/serverLog.middleware.js'
import { loginRouter, userRouter, errors, cursosRouter } from './src/server/routers/index.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
// Middleware que aplica a todas las rutas
app.use(serverLog)

// Registrar rutas
app.use('/api/auth', loginRouter)
app.use('/api/users', userRouter)
app.use('/api/cursos', cursosRouter)
app.use(errors)

// Solo inicia el servidor si NO está en modo de prueba
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
  })
}

export default app
