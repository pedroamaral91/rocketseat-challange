import { Column, Model, DataType } from 'sequelize-typescript'
import connection from '../../database'
import * as bcrypt from 'bcryptjs'

class User extends Model<User> {
  @Column
  public name !: string

  @Column
  public email !: string

  @Column
  public password_hash !: string

  @Column
  public password !: string

  static checkPassword (instance: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, instance.password_hash)
  };
}
User.init({
  name: DataType.STRING,
  email: DataType.STRING,
  password: DataType.VIRTUAL,
  password_hash: DataType.STRING
}, {
  sequelize: connection
})

User.beforeSave(async (user) => {
  if (user.password) {
    user.password_hash = await bcrypt.hash(user.password, 8)
  }
})

export default User
