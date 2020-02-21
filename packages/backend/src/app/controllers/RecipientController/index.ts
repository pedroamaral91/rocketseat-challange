import { Request, Response } from 'express'
import Recipient from '../../models/Recipient'

class RecipientController {
  async store (req: Request, res: Response): Promise<Response> {
    const recipient = await Recipient.create(req.body)
    return res.status(201).json(recipient)
  }
}

export default new RecipientController()
