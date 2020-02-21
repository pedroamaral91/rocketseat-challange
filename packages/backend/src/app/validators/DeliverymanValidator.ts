import { Request, Response, NextFunction } from 'express'
import * as Yup from 'yup'

export async function DeliverymanCreate (req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      avatar_id: Yup.number()
    })
    await schema.validate(req.body, { abortEarly: false })
    return next()
  } catch (er) {
    return res.status(400).json({ message: 'Validation fails' })
  }
}

export async function DeliverymanUpdate (req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.number()
    })
    await schema.validate(req.body, { abortEarly: false })
    return next()
  } catch (er) {
    console.log('reprovou')
    return res.status(400).json({ message: 'Validation fails' })
  }
}
