import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @belongsTo(() => User, { localKey: 'id', foreignKey: 'user_id' })
  public owner: BelongsTo<typeof User>

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public gender: string

  @column()
  public division: string

  @column()
  public level: string
}
