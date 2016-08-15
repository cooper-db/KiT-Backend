'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/kit'
  },


  production: {
    client: 'postgresql',
    connection:  process.env.DATABASE_URL || 'postgres://localhost/kit',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
