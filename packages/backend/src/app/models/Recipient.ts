import { Column, Model, DataType } from 'sequelize-typescript'
import connection from '../../database'

class Recipient extends Model<Recipient> {
  @Column
  public name !: string

  @Column
  public street !: string

  @Column
  public number !: number

  @Column
  public additional_address !: string

  @Column
  public state !: string

  @Column
  public city !: string

  @Column
  public zip_code !: string
}
Recipient.init({
  name: DataType.STRING,
  street: DataType.STRING,
  number: DataType.INTEGER,
  additional_address: DataType.STRING,
  state: DataType.STRING,
  city: DataType.STRING,
  zip_code: DataType.STRING
}, {
  sequelize: connection,
  tableName: 'recipient'
})

export default Recipient
