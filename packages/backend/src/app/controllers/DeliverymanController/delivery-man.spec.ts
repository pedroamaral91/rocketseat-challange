import request from 'supertest'
import File from '../../models/File'
import Deliveryman from '../../models/Deliveryman'
import app from '../../../app'
import Order from '../../models/Order'
import Recipient from '../../models/Recipient'

jest.mock('jsonwebtoken', () => ({
  verify: (): any => ({ admin: 1 })
}))

jest.mock('../../../lib/Queue', () => ({
  init: (): any => ({}),
  add: (): any => ({})
}))

afterAll(async () => {
  await Order.destroy({ where: {}, truncate: true })
  await Recipient.destroy({ where: {}, truncate: true })
  await File.destroy({ where: {}, truncate: true })
  await Deliveryman.destroy({ where: {}, truncate: true })
})

describe('Integration tests for Deliveryman', () => {
  it('should fail in validation', async () => {
    const response = await request(app)
      .post('/deliveryman')
      .set('Authorization', 'Beaerer token')
      .send({})
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
    const response = await request(app)
      .post('/deliveryman')
      .set('Authorization', 'Beaerer token')
      .send(payload)

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject(payload)
  })

  it('should update deliveryman', async () => {
    const deliveryman: Deliveryman = await Deliveryman.findOne()

    const payload = {
      email: 'tst@test.com'
    }

    const response = await request(app)
      .put(`/deliveryman/${deliveryman.id}`)
      .set('Authorization', 'Bearer token')
      .send(payload)

    await deliveryman.reload()

    expect(deliveryman.email).toBe(payload.email)
    expect(response.status).toBe(200)
  })

  it('should not found deiveryman orders', async () => {
    const response = await request(app).get('/deliveryman/10000/deliveries')

    expect(response.body).toMatchObject({ message: 'No Orders was found' })
    expect(response.status).toBe(404)
  })

  it('should list deliveryman orders', async () => {
    const recipient: Recipient = await Recipient.create({
      name: 't',
      street: 't',
      number: 3,
      state: 't',
      city: 't',
      zip_code: '0'
    })

    const deliveryman: Deliveryman = await Deliveryman.findOne()

    const order: Order = await Order.create({
      recipient_id: recipient.id,
      deliveryman_id: deliveryman.id,
      product: 'Produto',
      start_date: new Date().toString()
    })

    const response = await request(app).get(
      `/deliveryman/${deliveryman.id}/deliveries`
    )

    expect(response.body).toMatchObject({ name: 'Deliveryman', Order: { product: order.product } })
    expect(response.status).toBe(200)
  })

  it('should remove deliveryman', async () => {
    const deliveryman: Deliveryman = await Deliveryman.findOne()

    const response = await request(app)
      .delete(`/deliveryman/${deliveryman.id}`)
      .set('Authorization', 'Beraer token')

    expect(response.body).toMatchObject({ message: 'Deliveryman was removed' })
    expect(response.status).toBe(200)
  })
})
