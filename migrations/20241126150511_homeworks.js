/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
    await knex.schema.createTable('homeworks', (table) => {
      table.increments('id').notNullable().unique();
      table.integer('lesson_id').notNullable().references('id').inTable('lessons');
      table.string('description').notNullable()
      table.timestamp('start_time').defaultTo(knex.fn.now())
      table.timestamp('end_time').notNullable()
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = async function(knex) {
    await knex.schema.dropTable('homeworks')
  };
  