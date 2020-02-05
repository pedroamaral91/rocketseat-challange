import { Model, DataTypes, Sequelize } from 'sequelize'
class Order extends Model<Order> {
  readonly id?: number
  public recipient_id !: number
  public deliveryman_id !: number
  public signature_id !: number
  public product !: string
  public canceled_at !: string
  public start_date !: string
  public end_date !: string

  public static initialize (sequelize: Sequelize): void {
    this.init({
      recipient_id: DataTypes.INTEGER,
      deliveryman_id: DataTypes.INTEGER,
      signature_id: DataTypes.INTEGER,
      product: DataTypes.STRING,
      canceled_at: DataTypes.STRING,
      start_date: DataTypes.STRING,
      end_date: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate (model: any): void {
    this.belongsTo(model.Recipient)
    this.belongsTo(model.Deliveryman)
    this.belongsTo(model.Signature)
  }
}

export default Order
