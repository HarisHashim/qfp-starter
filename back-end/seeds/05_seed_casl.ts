import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  await knex('users').insert([
    {
      id: 1,
      email: 'super@devs.my',
      password: '$2a$10$/tqWbpp7DwUQnoUx9GSYeOWi0p9LxRfVR6YYDeUF5MZwUAaz5tSq2',
      roleId: 1
    },
    {
      id: 2,
      email: 'admin@devs.my',
      password: '$2a$10$/tqWbpp7DwUQnoUx9GSYeOWi0p9LxRfVR6YYDeUF5MZwUAaz5tSq2',
      roleId: 2
    },
    {
      id: 3,
      email: 'user@devs.my',
      password: '$2a$10$/tqWbpp7DwUQnoUx9GSYeOWi0p9LxRfVR6YYDeUF5MZwUAaz5tSq2',
      roleId: 3
    }
  ])
}
