import { Model, DataTypes, Sequelize } from 'sequelize'
class Recipient extends Model<Recipient> {
  public readonly id ?: number
  public name !: string
  public street !: string
  public number !: number
  public additional_address ?: string
  public state !: string
  public city !: string
  public zip_code !: string

  static initialize (sequelize: Sequelize): void {
    this.init({
      name: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      additional_address: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      zip_code: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate (model: any): void {
    this.hasOne(model.Order, { foreignKey: 'recipient_id', onDelete: 'SET NULL' })
  }
}

export default Recipient
