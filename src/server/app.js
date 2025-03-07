import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { serverLog } from './middlewares/serverLog.middleware.js'
import { loginRouter, userRouter, errors, cursosRouter } from './routers/index.js'

const app = express()
const PORT = process.env.PORT ?? 3000

// Middlewares
app.use(cors()) // Habilita CORS
app.use(express.json()) // Parsea el cuerpo de las solicitudes JSON
app.use(morgan('dev')) // Logs de las solicitudes en la consola
app.use(serverLog) // Middleware personalizado para logging

// Registrar rutas
app.use('/api/auth', loginRouter) // Rutas de autenticación
app.use('/api/users', userRouter) // Rutas de usuarios
app.use('/api/cursos', cursosRouter) // Rutas de cursos (corregido a plural)
app.use(errors) // Manejo de errores

// Iniciar el servidor
app.listen(PORT, () => console.log(`Server UP on port ${PORT}`))

export default app
