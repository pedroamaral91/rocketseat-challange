import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import SessionController from './app/controllers/SessionController'
import RecipientController from './app/controllers/RecipientController'
import DeliverymanController from './app/controllers/DeliverymanController'
import OrderController from './app/controllers/OrderController'
import FileController from './app/controllers/FileController'

import Auth from './app/middlewares/Auth'
import IsAdmin from './app/middlewares/IsAdmin'

import { DeliverymanCreate, DeliverymanUpdate } from './app/validators/DeliverymanValidator'
import { OrderCreate, OrderUpdate } from './app/validators/OrderValidator'
import { RecipientCreate } from './app/validators/RecipientValidator'

const routes = Router()
const upload = multer(multerConfig)

// Session Routes
routes.post('/session', SessionController.store)

// Recipient Routes
routes.post('/recipient', [RecipientCreate, Auth, IsAdmin], RecipientController.store)

// Files routes
routes.post('/files', upload.single('file'), FileController.store)

// Deliveryman Routes
routes.get('/deliveryman', [Auth, IsAdmin], DeliverymanController.index)
routes.get('/deliveryman/:id', [Auth, IsAdmin], DeliverymanController.show)
routes.get('/deliveryman/:id/deliveries', DeliverymanController.deliveries)
routes.post('/deliveryman', [DeliverymanCreate, Auth, IsAdmin], DeliverymanController.store)
routes.put('/deliveryman/:id', [DeliverymanUpdate, Auth, IsAdmin], DeliverymanController.update)
routes.delete('/deliveryman/:id', [DeliverymanUpdate, Auth, IsAdmin], DeliverymanController.delete)

// Order Routes
routes.get('/order', [Auth, IsAdmin], OrderController.index)
routes.get('/order/:id', [Auth, IsAdmin], OrderController.show)
routes.post('/order', [OrderCreate, Auth, IsAdmin], OrderController.store)
routes.put('/order/:id', OrderUpdate, OrderController.update)
routes.delete('/order/:id', OrderController.delete)

export default routes
