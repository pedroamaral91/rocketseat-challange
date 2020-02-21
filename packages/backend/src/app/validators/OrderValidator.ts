import { Request, Response, NextFunction } from 'express'
import * as Yup from 'yup'

export async function OrderCreate (req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
      start_date: Yup.date().required()
    })
    await schema.validate(req.body, { abortEarly: false })
    return next()
  } catch (er) {
    return res.status(400).json({ message: 'Validation fails' })
  }
}

export async function OrderUpdate (req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const schema = Yup.object().shape({
      start_date: Yup.date().required()
    })
    await schema.validate(req.body, { abortEarly: false })
    return next()
  } catch (er) {
    return res.status(400).json({ message: 'Validation fails' })
  }
}

export async function OrderConfirmDelivery (req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const schema = Yup.object().shape({
      end_date: Yup.date().required(),
      signature_id: Yup.number().required()
    })
    await schema.validate(req.body, { abortEarly: false })
    return next()
  } catch (er) {
    return res.status(400).json({ message: 'Validation fails' })
  }
}
