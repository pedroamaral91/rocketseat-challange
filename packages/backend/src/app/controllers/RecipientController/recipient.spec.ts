import request from 'supertest'
import app from '../../../app'
import Recipient from '../../models/Recipient'

jest.mock('jsonwebtoken', () => ({
  verify: (): any => ({ admin: 1 })
}))

jest.mock('../../../lib/Queue', () => ({
  init: (): any => ({}),
  add: (): any => ({})
}))

afterEach(() => {
  jest.clearAllMocks()
})

afterAll(async () => {
  await Recipient.destroy({ where: {}, truncate: true })
})

describe('recipient tests', () => {
  it('should validation fail', async () => {
    const response = await request(app).post('/recipient').set({ Authorization: 'Bearer test' }).send({})

    expect(response.status).toBe(400)
    expect(response.body).toEqual({ message: 'Validation fails' })
  })

  it('should store a new recipient', async () => {
    const payload = {
      name: 'fake',
      street: 'city',
      number: 123,
      zip_code: '01238',
      state: 'PR',
      city: 'city'
    }
    const response = await request(app).post('/recipient').set('Authorization', 'Bearer test').send(payload)

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject({ name: 'fake' })
  })
})
