import { Sequelize, Model, DataTypes } from 'sequelize'
import * as bcrypt from 'bcryptjs'

class User extends Model<User> {
  public name !: string
  public email !: string
  public password_hash !: string
  public password !: string

  static initialize (sequelize: Sequelize): void {
    this.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING
    }, {
      hooks: {
        beforeSave: async (user: User): Promise<void> => {
          if (user.password) { user.password_hash = await bcrypt.hash(user.password, 8) }
        }
      },
      sequelize
    })
  }

  static checkPassword (instance: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, instance.password_hash)
  };
}

export default User
