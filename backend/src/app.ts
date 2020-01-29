import './bootstrap'
import express from 'express'
import cors from 'cors'
import routes from './routes'

class App {
  public server: express.Application
  constructor () {
    this.server = express()
    this.middleware()
    this.routes()
  }

  private middleware (): void {
    this.server.use(express.json())
    this.server.use(cors())
  }

  private routes (): void {
    this.server.use(routes)
  }
}

export default new App().server
