import request from 'supertest'
import File from '../../models/File'
import Deliveryman from '../../models/Deliveryman'
import app from '../../../app'

jest.mock('jsonwebtoken', () => ({
  verify: (): any => ({ admin: 1 })
}))

afterAll(async () => {
  await File.destroy({ where: {}, truncate: true })
  await Deliveryman.destroy({ where: {}, truncate: true })
})

describe('Integration tests for Deliveryman', () => {
  it('should fail in validation', async () => {
    const response = await request(app).post('/deliveryman').set('Authorization', 'Beaerer token').send({})
    expect(response.status).toBe(400)
    expect(response.body).toMatchObject({ message: 'Validation fails' })
  })

  it('should create deliveryman', async () => {
    const file = await File.create({ name: 'test', path: 'teste' })
    const payload = {
      name: 'Deliveryman',
      email: 'delivery@test.com',
      avatar_id: file.id
    }
    const response = await request(app).post('/deliveryman').set('Authorization', 'Beaerer token').send(payload)

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject(payload)
  })
})
