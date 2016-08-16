'use strict';

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('contacts').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('contacts').insert({
                    id: 1,
                    user_id: 1,
                    name: 'RogerS',
                    phone: '234-5678',
                    email: 'roger@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 7,
                    notes: 'Wife makes the BEST cookies, so call frequently',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 2,
                    user_id: 1,
                    name: 'Logan',
                    phone: '229-8678',
                    email: 'logan@gmail.com',
                    relationship: 'social',
                    frequency_of_contact: 14,
                    notes: 'Teaches without shoes frequently. Yucky!',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 3,
                    user_id: 1,
                    name: 'Jordan Maj',
                    phone: '984-5678',
                    email: 'jordan@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 120,
                    notes: 'Really long last name...can\'t remember!',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 4,
                    user_id: 1,
                    name: 'Micah',
                    phone: '834-5678',
                    email: 'micah@gmail.com',
                    relationship: 'social',
                    frequency_of_contact: 365,
                    notes: 'Thinks he\'s really good at ping pong, but...',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 5,
                    user_id: 1,
                    name: 'DB Cooper aka JIMMY',
                    phone: '987-2367',
                    email: 'db@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 0,
                    notes: 'Only met once on puddle flight to Seattle. Took my monies. Damn him.',
                    last_contact: new Date()
                }),
                knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 6')
            ]);
        });
};
