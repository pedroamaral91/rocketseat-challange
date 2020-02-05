import { Request, Response } from 'express'
import User from '../../models/User'
import * as jwt from 'jsonwebtoken'
import env from '../../../config/env'
import * as Yup from 'yup'

class SessionController {
  async store (req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6)
    })

    if (!await schema.isValid(req.body)) {
      return res.status(400).json({ message: 'Validation fails' })
    }

    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    if (!await User.checkPassword(user, password)) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    const { id, name } = user

    return res.json({ id, name, email, token: jwt.sign({ id, admin: 1 }, env('APP_SECRET')) })
  }
}

export default new SessionController()
