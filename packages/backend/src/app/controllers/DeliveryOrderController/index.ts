import Order from '../../models/Order'
import { Response, Request } from 'express'

class DeliveryOrderController {
  public async confirmDelivery (req: Request, res: Response): Promise<Response> {
    const { order_id } = req.params
    const { end_date, signature_id } = req.body

    const order: Order = await Order.findByPk(order_id)

    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    await order.update({ end_date, signature_id })

    return res.json(order)
  }
}

export default new DeliveryOrderController()
