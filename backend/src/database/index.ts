import { Dialect } from 'sequelize'
import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

import * as configDatabase from '../config/database'

const config = {
  ...configDatabase,
  dialect: configDatabase.dialect as Dialect,
  storage: configDatabase.storage as string
} as SequelizeOptions

class Database {
  connection: Sequelize = new Sequelize(config)
}

export default new Database().connection
