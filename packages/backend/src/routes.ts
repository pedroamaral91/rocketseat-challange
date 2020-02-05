import { Router } from 'express'

import SessionController from './app/controllers/SessionController'
import RecipientController from './app/controllers/RecipientController'
import DeliverymanController from './app/controllers/DeliverymanController'
import OrderController from './app/controllers/OrderController'

import Auth from './app/middlewares/Auth'
import IsAdmin from './app/middlewares/IsAdmin'

const routes = Router()

// Session Routes
routes.post('/session', SessionController.store)

// Recipient Routes
routes.post('/recipient', [Auth, IsAdmin], RecipientController.store)

// Deliveryman Routes
routes.post('/deliveryman', [Auth, IsAdmin], DeliverymanController.store)

// Order Routes
routes.get('/order', [Auth, IsAdmin], OrderController.index)
routes.get('/order/:id', [Auth, IsAdmin], OrderController.show)
routes.post('/order', [Auth, IsAdmin], OrderController.store)
routes.put('/order/:id', OrderController.update)
routes.delete('/order/:id', OrderController.delete)

export default routes
