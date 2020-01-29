import { Router } from 'express'
import User from './app/models/User'
import SessionController from './app/controllers/SessionController'

const routes = Router()

const sessionController = new SessionController(User)

routes.post('/session', (req, res) => sessionController.store(req, res))
export default routes
