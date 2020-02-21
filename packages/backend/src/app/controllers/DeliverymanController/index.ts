import { Request, Response } from 'express'
import Deliveryman from '../../models/Deliveryman'
import Order from '../../models/Order'
import { Op } from 'sequelize'

class DeliverymanController {
  public async store (req: Request, res: Response): Promise<Response> {
    const deliveryman: Deliveryman = await Deliveryman.create(req.body)

    return res.status(201).json(deliveryman)
  }

  public async index (req: Request, res: Response): Promise<Response> {
    const deliveryman: Deliveryman = await Deliveryman.findAll()

    return res.json(deliveryman)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const deliveryman: Deliveryman = await Deliveryman.findByPk(id)

    if (!deliveryman) {
      return res.status(404).json({ message: 'Deliveryman not found' })
    }

    return res.json(deliveryman)
  }

  public async deliveries (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { delivered } = req.body
    let endDateParam = {}

    if (delivered) endDateParam = { [Op.not]: null }
    else endDateParam = { [Op.is]: null }

    const deliveryman: Deliveryman = await Deliveryman.findByPk(id, {
      attributes: ['name'],
      include: [{
        model: Order,
        attributes: ['product'],
        where: {
          canceled_at: {
            [Op.is]: null
          },
          end_date: endDateParam
        }
      }]
    })

    if (!deliveryman) {
      return res.status(404).json({ message: 'No Orders was found' })
    }

    return res.json(deliveryman)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const deliveryman: Deliveryman = await Deliveryman.findByPk(id)
    if (!deliveryman) {
      return res.status(404).json({ message: 'Deliveryman not found' })
    }

    await deliveryman.update(req.body)

    return res.json(deliveryman)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const deliveryman: Deliveryman = await Deliveryman.findByPk(id)
    if (!deliveryman) {
      return res.status(404).json({ message: 'Deliveryman not found' })
    }

    await deliveryman.destroy()

    return res.json({ message: 'Deliveryman was removed' })
  }
}

export default new DeliverymanController()
