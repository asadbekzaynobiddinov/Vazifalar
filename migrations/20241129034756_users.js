/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').notNullable().unique()
    table.string('username').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.enum('role', ['admin', 'user']).defaultTo('user')
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function(knex) {
  await knex.schema.dropTable('users')
};
