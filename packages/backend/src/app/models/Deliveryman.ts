import { Column, Model, DataType } from 'sequelize-typescript'
import connection from '../../database'

class Recipient extends Model<Recipient> {
  @Column
  public name !: string

  @Column
  public avatar_id !: number

  @Column
  public email !: string
}

Recipient.init({
  name: DataType.STRING,
  avatar_id: DataType.INTEGER,
  email: DataType.STRING
}, {
  sequelize: connection,
  tableName: 'deliveryman'
})

export default Recipient
