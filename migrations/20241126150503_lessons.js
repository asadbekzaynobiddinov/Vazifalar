/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
  await knex.schema.createTable('lessons', (table) => {
    table.increments('id').notNullable().unique();
    table.integer('teacher_id').notNullable().references('id').inTable('teachers');
    table.string('name').notNullable()
    table.timestamp('start_time').defaultTo(knex.fn.now())
    table.timestamp('end_time').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function(knex) {
  await knex.schema.dropTable('lessons')
};
