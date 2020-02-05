import { Request, Response } from 'express'
import * as Yup from 'yup'
import Deliveryman from '../../models/Deliveryman'
import File from '../../models/File'

class DeliverymanController {
  public async store (req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      avatar_id: Yup.number().required(),
      email: Yup.string().email().required()
    })

    if (!await schema.isValid(req.body)) {
      return res.status(400).json({ message: 'Validation fails' })
    }

    const deliveryman = await Deliveryman.create(req.body)

    return res.status(201).json(deliveryman)
  }
}

export default new DeliverymanController()
