import request from 'supertest'
import { endOfDay } from 'date-fns'

import app from '../../../app'
import Order from '../../models/Order'
import Recipient from '../../models/Recipient'
import Deliveryman from '../../models/Deliveryman'

jest.mock('jsonwebtoken', () => ({
  verify: (): any => ({ admin: 1 })
}))

const clearDb = (model: any): Promise<any> => model.destroy({ where: {}, truncate: true })

afterAll(async () => {
  await clearDb(Recipient)
  await clearDb(Deliveryman)
  await clearDb(Order)
})

describe('Integration tests for Store an Order', () => {
  it('should fail in validation', async () => {
    const response = await request(app).post('/order').set('Authorization', 'Bearer lol')

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject({ message: 'Validation fails' })
  })
  it('should store an order', async () => {
    const recipient = await Recipient.create({ name: 't', street: 't', number: 3, state: 't', city: 't', zip_code: '0' })
    const deliveryman = await Deliveryman.create({ name: 't', email: 'deliveryman@gmail.com' })
    const payload = {
      recipient_id: recipient.id,
      deliveryman_id: deliveryman.id,
      product: 'Produto',
      start_date: new Date()
    }
    const response = await request(app).post('/order').set('Authorization', 'Bearer lol').send(payload)

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject({ product: 'Produto' })
  })
})

describe('Integration tests for List an Order', () => {
  it('should return a list order', async () => {
    const response = await request(app).get('/order').set('Authorization', 'Beraer lol').send()

    expect(response.status).toBe(200)
  })

  it('should return one order', async () => {
    const order: Order = await Order.findOne()

    const response = await request(app).get(`/order/${order.id}`).set('Authorization', 'Beraer lol')

    expect(response.body).toMatchObject({
      product: order.product,
      id: order.id
    })
    expect(response.status).toBe(200)
  })
})

describe('Integraion tests for Update an Order', () => {
  it('should not update an order if date is not between 08am and 06pm', async () => {
    const start_date = new Date('2020-01-01 7:59:00')
    const response = await request(app).put('/order/1').set('Authorization', 'Bearer lol').send({
      start_date
    })

    expect(response.body).toMatchObject({ message: 'Order must be withdraw from 08AM until 06PM' })
  })

  it('should update an order', async () => {
    const order: Order = await Order.findOne()
    const start_date = new Date('2100-01-01 8:00:00')
    const response = await request(app).put(`/order/${order.id}`).send({
      start_date
    })

    expect(response.body).toMatchObject({ message: 'Order updated!' })
    expect(response.status).toBe(200)
  })

  describe('Integration tests for delete an Order', () => {
    it('should delete an order', async () => {
      const order: Order = await Order.findOne()

      const response = await request(app).delete(`/order/${order.id}`).set('Authorization', 'Bearer 123')

      expect(response.body).toMatchObject({ message: 'The order selected was removed' })
      expect(response.status).toBe(200)
    })
  })
})
