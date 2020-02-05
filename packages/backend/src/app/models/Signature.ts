import { Sequelize, Model, DataTypes } from 'sequelize'

class Signature extends Model<Signature> {
  public name !: string
  public path !: string

  static initialize (sequelize: Sequelize): void {
    this.init({
      name: DataTypes.STRING,
      path: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

export default Signature
