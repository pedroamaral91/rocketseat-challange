import { Request, Response } from 'express'
import * as Yup from 'yup'
import Recipient from '../../models/Recipient'

class RecipientController {
  async store (req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      additional_address: Yup.string(),
      zip_code: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required()
    })
    if (!await schema.isValid(req.body)) {
      return res.status(400).json({ message: 'Validation fails' })
    }
    const recipient = await Recipient.create(req.body)
    return res.status(201).json(recipient)
  }
}

export default new RecipientController()
