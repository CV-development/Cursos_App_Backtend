/* import request from 'supertest'
import app from '../index.js' // Asegúrate de que `index.js` exporte `app` correctamente

describe('Pruebas API REST', () => {
  let token
  let courseId

  beforeAll(async () => {
    // Registrar un usuario para obtener un token
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'usuario_test',
        email: `test${Date.now()}@email.com`,
        password: '123456'
      })

    token = res.body.token
  })

  afterAll(async () => {
    // Cierra cualquier conexión abierta
    await new Promise(resolve => setTimeout(() => resolve(), 500))
  })

 /*  describe('Pruebas de usuario', () => {
    it('✅ Debe registrar un usuario (POST /api/auth/register)', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          username: 'usuario_test',
          email: `test${Date.now()}@email.com`,
          password: '123456'
        })

      expect([201, 400]).toContain(res.statusCode)
      if (res.statusCode === 201) {
        expect(res.body).toHaveProperty('token')
      } else {
        expect(res.body.error).toBe('El usuario ya existe')
      }
    })

    it('✅ Debe autenticar un usuario (POST /api/auth/login)', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@email.com',
          password: '123456'
        })

      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('token')
    })

    it('✅ Debe acceder a la ruta protegida con un token válido (GET /api/auth/perfil)', async () => {
      const login = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@email.com',
          password: '123456'
        })

      const res = await request(app)
        .get('/api/auth/perfil')
        .set('Authorization', `Bearer ${login.body.token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('user')
    })

    it('❌ No debe permitir acceso sin token (GET /api/auth/perfil)', async () => {
      const res = await request(app).get('/api/auth/perfil')

      expect(res.statusCode).toBe(403)
      expect(res.body.error).toBe('Acceso denegado, token no proporcionado')
    })
  })

  describe('Pruebas de curso', () => {
    it('✅ Debe crear un curso (POST /api/cursos/curso)', async () => {
      const res = await request(app)
        .post('/api/cursos/curso')
        .set('Authorization', `Bearer ${token}`)
        .send({
          titulo: 'Curso de Prueba',
          descripcion: 'Este es un curso de prueba',
          instructor: 'Juan Pérez',
          fecha_ini: '2024-01-01',
          fecha_fin: '2024-12-31'
        })

      expect(res.statusCode).toBe(201)
      expect(res.body).toHaveProperty('course')
      courseId = res.body.course.id
    })

    it('✅ Debe obtener un curso por ID (GET /api/cursos/curso/:id)', async () => {
      const res = await request(app)
        .get(`/api/cursos/curso/${courseId}`)
        .set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('titulo')
    })

    it('✅ Debe actualizar un curso (PUT /api/cursos/curso/:id)', async () => {
      const res = await request(app)
        .put(`/api/cursos/curso/${courseId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          titulo: 'Curso de Prueba Actualizado',
          descripcion: 'Este es un curso de prueba actualizado',
          instructor: 'Juan Pérez',
          fecha_ini: '2024-01-01',
          fecha_fin: '2024-12-31'
        })

      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('course')
    })

    it('❌ No debe obtener un curso que no existe (GET /api/cursos/curso/99999)', async () => {
      const res = await request(app)
        .get('/api/cursos/curso/99999')
        .set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(404)
    })

    it('❌ No debe actualizar un curso que no existe (PUT /api/cursos/curso/99999)', async () => {
      const res = await request(app)
        .put('/api/cursos/curso/99999')
        .set('Authorization', `Bearer ${token}`)
        .send({
          titulo: 'Curso de Prueba Actualizado',
          descripcion: 'Este es un curso de prueba actualizado',
          instructor: 'Juan Pérez',
          fecha_ini: '2024-01-01',
          fecha_fin: '2024-12-31'
        })

      expect(res.statusCode).toBe(404)
    })
  })
}) */
