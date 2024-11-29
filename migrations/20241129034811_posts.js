/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
  await knex.schema.createTable('posts', (table) => {
    table.increments('id').notNullable().unique()
    table.integer('user_id').references('id').inTable('users')
    table.string('title').notNullable()
    table.string('body').notNullable()
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function(knex) {
  await knex.schema.dropTable('posts')
};
