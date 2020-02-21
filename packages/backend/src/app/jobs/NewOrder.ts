import Mail from '../../lib/Mail'
import { JobInterface } from './jobs.types'
import Recipient from '../models/Recipient'
import Deliveryman from '../models/Deliveryman'
import Order from '../models/Order'
import env from '../../config/env'

interface DataInterface {
  [prop: string]: {
    deliveryman: Deliveryman;
    recipient: Recipient;
    order: Order
  }
}

class NewOrderMail implements JobInterface {
  get key (): string {
    return 'NewOrderMail'
  }

  async handle ({ data }: DataInterface): Promise<void> {
    const { deliveryman, recipient, order } = data
    const { city, street, number, additional_address, state, zip_code } = recipient
    const url = `${env('APP_URL')}/order/${order.id}`
    await Mail.sendEmail({
      to: deliveryman.email,
      subject: 'Nova encomenda cadastrada',
      template: 'newOrder',
      context: {
        id: deliveryman.id,
        name: deliveryman.name,
        city,
        street,
        number,
        additional_address,
        state,
        zip_code,
        url
      }
    })
  }
}

export default new NewOrderMail()
