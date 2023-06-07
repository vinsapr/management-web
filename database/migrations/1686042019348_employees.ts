import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Employees extends BaseSchema {
  protected tableName = 'employees'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').notNullable()
      table.string('first_name')
      table.string('last_name')
      table.string('gender')
      table.string('division')
      table.string('level')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
