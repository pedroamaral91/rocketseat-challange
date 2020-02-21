import { Request, Response, NextFunction } from 'express'
import * as Yup from 'yup'

export async function RecipientCreate (req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      additional_address: Yup.string(),
      zip_code: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required()
    })
    await schema.validate(req.body, { abortEarly: false })
    return next()
  } catch (er) {
    return res.status(400).json({ message: 'Validation fails' })
  }
}
