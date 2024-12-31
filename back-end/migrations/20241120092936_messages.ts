// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('messages', (table) => {
    table.increments('id')

    table.string('text')

    table.integer('userId').unsigned().notNullable()
    table.foreign('userId').references('id').inTable('users')

    table.string('user', 255).nullable()
    table.bigInteger('createdAt')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('messages')
}
