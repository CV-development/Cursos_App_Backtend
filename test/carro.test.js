import request from 'supertest'
import app from '../index.js' // Asegúrate de que `index.js` exporta `app` correctamente

describe('Pruebas API de Carro de Compras', () => {
  let token
  let userId = 1
  let courseId = 1

  beforeAll(async () => {
    // Registrar un usuario para obtener un token
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        email: `test${Date.now()}@email.com`,
        password: '123456'
      })

    token = res.body.token
  })

  afterAll(async () => {
    // Cierra cualquier conexión abierta
    await new Promise(resolve => setTimeout(() => resolve(), 500))
  })

  it('✅ Debe agregar un curso al carro (POST /api/carro)', async () => {
    const res = await request(app)
      .post('/api/carro')
      .set('Authorization', `Bearer ${token}`)
      .send({
        userId,
        courseId
      })

    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty('carro')
  })

  it('✅ Debe obtener el carro de un usuario (GET /api/carro/:userId)', async () => {
    const res = await request(app)
      .get(`/api/carro/${userId}`)
      .set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })

  it('✅ Debe eliminar un curso del carro (DELETE /api/carro)', async () => {
    const res = await request(app)
      .delete('/api/carro')
      .set('Authorization', `Bearer ${token}`)
      .send({
        userId,
        courseId
      })

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('carro')
  })

  it('❌ No debe agregar un curso al carro sin token (POST /api/carro)', async () => {
    const res = await request(app)
      .post('/api/carro')
      .send({
        userId,
        courseId
      })

    expect(res.statusCode).toBe(403)
  })

  it('❌ No debe obtener el carro de un usuario sin token (GET /api/carro/:userId)', async () => {
    const res = await request(app)
      .get(`/api/carro/${userId}`)

    expect(res.statusCode).toBe(403)
  })

  it('❌ No debe eliminar un curso del carro sin token (DELETE /api/carro)', async () => {
    const res = await request(app)
      .delete('/api/carro')
      .send({
        userId,
        courseId
      })

    expect(res.statusCode).toBe(403)
  })
})
