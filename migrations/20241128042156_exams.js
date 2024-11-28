/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex.schema.createTable('exams', (table) => {
    table.increments('id').notNullable().unique()
    table.integer('course_id').references('id').inTable('courses')
    table.integer('student_id').references('id').inTable('students')
    table.timestamp('start_time').defaultTo(knex.fn.now())
    table.timestamp('end_time')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function(knex) {
  await knex.schema.dropTable('exams')
};
