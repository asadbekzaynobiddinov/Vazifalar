// Update with your config settings.
import { config } from "./src/config/index.js";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

export default {

  development: {
    client: 'pg',
    connection: {
      user: config.db.user,
      password: config.db.password,
      host: config.db.host,
      port: config.db.port,
      database: config.db.database
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
