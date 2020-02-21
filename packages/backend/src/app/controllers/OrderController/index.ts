import { Request, Response } from 'express'

import Order from '../../models/Order'
import Recipient from '../../models/Recipient'
import Deliveryman from '../../models/Deliveryman'
import NewOrderMail from '../../jobs/NewOrder'
import Queue from '../../../lib/Queue'

class OrderController {
  async store (req: Request, res: Response): Promise<Response> {
    const order: Order = await Order.create(req.body)

    const deliveryman: Deliveryman = await Deliveryman.findByPk(req.body.deliveryman_id)
    const recipient: Recipient = await Recipient.findByPk(req.body.recipient_id)

    await Queue.add(NewOrderMail.key, {
      deliveryman,
      recipient,
      order
    })

    return res.status(201).json(order)
  }

  async index (req: Request, res: Response): Promise<Response> {
    const orders = Order.findAll({
      where: { canceled_at: null },
      order: ['created_at'],
      include: [
        {
          model: Recipient
        },
        {
          model: Deliveryman
        }
      ]
    })
    return res.json(orders)
  }

  async show (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const order: Order = await Order.findByPk(id)
    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    return res.json(order)
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { start_date } = req.body
    const requestHour = new Date(start_date).getHours()
    const orderId = req.params.id

    if (requestHour > 18 || requestHour < 8) {
      return res.status(400).json({ message: 'Order must be withdraw from 08AM until 06PM' })
    }

    const order: Order = await Order.findByPk(orderId)
    await order.update({
      start_date
    })

    return res.json({ message: 'Order updated!' })
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const order: Order = await Order.findByPk(id)

    await order.destroy()

    return res.json({ message: 'The order selected was removed' })
  }
}

export default new OrderController()
