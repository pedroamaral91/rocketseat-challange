import { Request, Response, NextFunction } from 'express'

export default function IsAdmin (req: Request, res: Response, next: NextFunction): void | Response {
  try {
    if (!req.admin) {
      return res.status(401).json({ message: 'Not authorized' })
    }
    return next()
  } catch (er) {
    return res.json(er)
  }
}
