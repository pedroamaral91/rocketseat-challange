import { Dialect, Sequelize } from 'sequelize'
import { SequelizeOptions } from 'sequelize-typescript'

import File from '../app/models/File'
import User from '../app/models/User'
import Deliveryman from '../app/models/Deliveryman'
import Recipient from '../app/models/Recipient'
import Order from '../app/models/Order'
import Signature from '../app/models/Signature'

import * as configDatabase from '../config/database'

const config = {
  ...configDatabase,
  dialect: configDatabase.dialect as Dialect,
  storage: configDatabase.storage as string
} as SequelizeOptions

const models = [Deliveryman, Order, User, Recipient, File, Signature]

class Database {
  connection!: Sequelize

  constructor () {
    this.init()
  }

  public init (): void {
    this.connection = new Sequelize(config)
    models
      .map(model => model.initialize(this.connection))
    models.map((model: any) => model.associate && model.associate(this.connection.models))
  }
}

export default new Database()
