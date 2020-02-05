import request from 'supertest'
import app from '../../../app'

describe('Integration tests for Deliveryman', () => {
  it('should fail in validation', async () => {
    const response = await request(app).post('/deliveryman').set('Authorization', 'token').send({})
    expect(response.status).toBe(400)
    expect(response.body).toMatchObject({ message: 'Validation fails' })
  })

  it('should create deliveryman', async () => {
    const payload = {
      name: 'Deliveryman',
      email: 'delivery@test.com',
      avatar_id: 1
    }
    const response = await request(app).post('/deliveryman').set('Authorization', 'token').send(payload)

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject(payload)
  })
})
