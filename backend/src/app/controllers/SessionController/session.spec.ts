import SessionController from './index'
import User from '../../models/User'
import * as jwt from 'jsonwebtoken'

jest.mock('../../models/User')
jest.mock('express')
jest.mock('jsonwebtoken', () => ({
  sign: (): string => 'hashToken'
}))

beforeEach(() => {
  jest.resetAllMocks()
})

const mockResponse: any = () => {
  const res: any = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

const mockRequest: any = (data: {}) => {
  return {
    body: { ...data }
  }
}

describe('Unit tests to Session Controller', () => {
  it('should user not be authenticated if not exists', async () => {
    User.findOne = jest.fn().mockReturnValue(null)
    const req = mockRequest()
    const res = mockResponse()
    await SessionController.store(req, res)
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ message: 'Not authorized' })
  })

  it('should user not be authenticated if password is wrong', async () => {
    const req = mockRequest()
    const res = mockResponse()
    User.findOne = jest.fn().mockReturnValue(true)
    User.checkPassword = jest.fn().mockReturnValue(false)
    await SessionController.store(req, res)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ message: 'Not authorized' })
  })

  it('should user be authenticated', async () => {
    const req = mockRequest({ email: 'test@gmail.com' })
    const res = mockResponse()
    User.findOne = jest.fn().mockReturnValue({ id: 1, name: 'Pedro' })
    const { id, name } = User.findOne()
    User.checkPassword = jest.fn().mockReturnValue(true)

    await SessionController.store(req, res)

    expect(res.json).toHaveBeenCalledWith({ email: req.body.email, id, name, token: jwt.sign({}, '') })
  })
})
