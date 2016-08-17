'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([

        knex('users').insert({id: 1, username: 'Gabe', password: 1234}),
        knex('users').insert({id: 2, username: 'Ryan', password: 1234}),
        knex('users').insert({id: 3, username: 'Jimmy', password: 1234}),
        knex('users').insert({id: 4, username: 'Vy', password: 1234}),
        knex('users').insert({id: 5, username: 'Kristen', password: 1234}),
        knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 6')
      ]);
    });
};
