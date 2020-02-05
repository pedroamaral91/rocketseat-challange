import { Sequelize, Model, DataTypes } from 'sequelize'

class File extends Model<File> {
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

  static associate (model: any): void {
    this.hasOne(model.Deliveryman, { foreignKey: 'avatar_id', onDelete: 'cascade' })
  }
}

export default File
