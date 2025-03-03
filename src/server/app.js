import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { serverLog } from './middlewares/serverLog.middleware.js'
import { loginRouter, userRouter, errors, cursosRouter } from './routers/index.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
// Middleware que aplica a todas las rutas
app.use(serverLog)

app.use('/api/auth', loginRouter)
app.use('/api/users', userRouter)
app.use('/api/curso', cursosRouter)
app.use(errors)

app.listen(PORT, () => console.log(`Server UP on port ${PORT}`))

export default app
