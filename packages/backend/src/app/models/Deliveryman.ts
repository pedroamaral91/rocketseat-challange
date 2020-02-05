import { Model, DataTypes, Sequelize } from 'sequelize'

class Deliveryman extends Model<Deliveryman> {
  public readonly id?: number;
  public name !: string
  public avatar_id !: number
  public email !: string

  static initialize (sequelize: Sequelize): void {
    this.init({
      name: DataTypes.STRING,
      avatar_id: DataTypes.INTEGER,
      email: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'deliveryman'
    })
  }

  static associate (model: any): void {
    this.belongsTo(model.File, { foreignKey: 'avatar_id' })
    this.hasOne(model.Order, { foreignKey: 'deliveryman_id' })
  }
}

export default Deliveryman
