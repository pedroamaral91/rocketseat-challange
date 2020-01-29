import { Model } from 'sequelize-typescript'

type NonAbstract<T> = {[P in keyof T]: T[P]}
type Constructor<T> = (new () => T)
export type ModelInterface<T> = Constructor<T> & NonAbstract<typeof Model>
