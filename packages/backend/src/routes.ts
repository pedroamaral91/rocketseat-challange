import { Router } from 'express'

import SessionController from './app/controllers/SessionController'
import RecipientController from './app/controllers/RecipientController'

import Auth from './app/middlewares/Auth'
import IsAdmin from './app/middlewares/IsAdmin'

const routes = Router()

routes.post('/session', SessionController.store)

routes.post('/recipient', [Auth, IsAdmin], RecipientController.store)
export default routes
