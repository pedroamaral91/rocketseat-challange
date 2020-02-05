import nodemailer, { Transporter, TransportOptions } from 'nodemailer'
import mailerConfig from '../config/mailer'
import expbhs from 'express-handlebars'
import { resolve } from 'path'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailerhbs = require('nodemailer-express-handlebars')

type MessageTypes = {
  to: string;
  subject: string;
  template?: string;
  text?: string;
  html?: string;
  context?: any;
}

class Mail {
  private transporter !: Transporter
  constructor () {
    const { host, port, auth, secure } = mailerConfig
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null
    } as TransportOptions)
    this.configureTemplates()
  }

  private configureTemplates (): void {
    const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails')
    this.transporter.use('compile', nodemailerhbs({
      viewEngine: expbhs.create({
        layoutsDir: resolve(viewPath, 'layouts'),
        partialsDir: resolve(viewPath, 'partials'),
        defaultLayout: 'default',
        extname: '.hbs'
      }),
      viewPath,
      extName: '.hbs'
    }))
  }

  public sendEmail (message: MessageTypes): Promise<Transporter> {
    return this.transporter.sendMail({
      ...mailerConfig.default,
      ...message
    })
  }
}

export default new Mail()
