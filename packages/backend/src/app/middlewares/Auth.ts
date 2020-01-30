import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import env from '../../config/env'

interface Payload {
  id: number
  admin: number
}

export default function Auth (req: Request, res: Response, next: NextFunction): void | Response {
  try {
    const token = req.headers.authorization as string

    if (!token) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    const { id, admin } = jwt.verify(token, env('APP_SECRET')) as Payload
    req.userId = id
    req.admin = admin

    return next()
  } catch (er) {
    return res.status(401).json(er)
  }
}
