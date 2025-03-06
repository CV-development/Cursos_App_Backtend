export { default as loginRouter } from './authRoutes.js'
export { default as userRouter } from './userRoutes.js'
export { default as cursosRouter } from './cursos.router.js'
export { default as errors } from './errors.router.js'

/* import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./src/server/routers/authRoutes.js";

export { default as errors } from './errors.router.js'
export { default as cursosRouter } from './cursos.router.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// 📌 Registrar rutas
app.use("/api/auth", authRoutes);

// 📌 Solo inicia el servidor si NO está en modo de prueba (Jest)
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
  });
}

// 📌 Exportar `app` para que Supertest pueda usarlo en `api.test.js`
export default app;
 */