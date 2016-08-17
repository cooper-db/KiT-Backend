'use strict';

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('contacts').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                //BEGIN SEEDS FOR USER 1
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
                    notes: 'Only met once on a flight to Seattle. Took my monies. Damn him.',
                    last_contact: new Date()
                }),
                // END SEEDS FOR USER 1
                //*************************************************
                //BEGIN SEEDS FOR USER 2
                knex('contacts').insert({
                    id: 6,
                    user_id: 2,
                    name: 'RogerS',
                    phone: '234-5678',
                    email: 'roger@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 7,
                    notes: 'Wife makes the BEST cookies, so call frequently',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 7,
                    user_id: 2,
                    name: 'Logan',
                    phone: '229-8678',
                    email: 'logan@gmail.com',
                    relationship: 'social',
                    frequency_of_contact: 14,
                    notes: 'Teaches without shoes frequently. Yucky!',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 8,
                    user_id: 2,
                    name: 'Jordan Maj',
                    phone: '984-5678',
                    email: 'jordan@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 120,
                    notes: 'Really long last name...can\'t remember!',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 9,
                    user_id: 2,
                    name: 'Micah',
                    phone: '834-5678',
                    email: 'micah@gmail.com',
                    relationship: 'social',
                    frequency_of_contact: 365,
                    notes: 'Thinks he\'s really good at ping pong, but...',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 10,
                    user_id: 2,
                    name: 'DB Cooper aka JIMMY',
                    phone: '987-2367',
                    email: 'db@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 0,
                    notes: 'Only met once on a flight to Seattle. Took my monies. Damn him.',
                    last_contact: new Date()
                }),
                // END SEEDS FOR USER 2
                //*************************************************
                //BEGIN SEEDS FOR USER 3
                knex('contacts').insert({
                    id: 11,
                    user_id: 3,
                    name: 'RogerS',
                    phone: '234-5678',
                    email: 'roger@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 7,
                    notes: 'Wife makes the BEST cookies, so call frequently',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 12,
                    user_id: 3,
                    name: 'Logan',
                    phone: '229-8678',
                    email: 'logan@gmail.com',
                    relationship: 'social',
                    frequency_of_contact: 14,
                    notes: 'Teaches without shoes frequently. Yucky!',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 13,
                    user_id: 3,
                    name: 'Jordan Maj',
                    phone: '984-5678',
                    email: 'jordan@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 120,
                    notes: 'Really long last name...can\'t remember!',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 14,
                    user_id: 3,
                    name: 'Micah',
                    phone: '834-5678',
                    email: 'micah@gmail.com',
                    relationship: 'social',
                    frequency_of_contact: 365,
                    notes: 'Thinks he\'s really good at ping pong, but...',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 15,
                    user_id: 3,
                    name: 'DB Cooper aka JIMMY',
                    phone: '987-2367',
                    email: 'db@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 0,
                    notes: 'Only met once on a flight to Seattle. Took my monies. Damn him.',
                    last_contact: new Date()
                }),
                // END SEEDS FOR USER 3
                //*************************************************
                //BEGIN SEEDS FOR USER 4
                knex('contacts').insert({
                    id: 16,
                    user_id: 4,
                    name: 'RogerS',
                    phone: '234-5678',
                    email: 'roger@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 7,
                    notes: 'Wife makes the BEST cookies, so call frequently',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 17,
                    user_id: 4,
                    name: 'Logan',
                    phone: '229-8678',
                    email: 'logan@gmail.com',
                    relationship: 'social',
                    frequency_of_contact: 14,
                    notes: 'Teaches without shoes frequently. Yucky!',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 18,
                    user_id: 4,
                    name: 'Jordan Maj',
                    phone: '984-5678',
                    email: 'jordan@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 120,
                    notes: 'Really long last name...can\'t remember!',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 19,
                    user_id: 4,
                    name: 'Micah',
                    phone: '834-5678',
                    email: 'micah@gmail.com',
                    relationship: 'social',
                    frequency_of_contact: 365,
                    notes: 'Thinks he\'s really good at ping pong, but...',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 20,
                    user_id: 4,
                    name: 'DB Cooper aka JIMMY',
                    phone: '987-2367',
                    email: 'db@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 0,
                    notes: 'Only met once on a flight to Seattle. Took my monies. Damn him.',
                    last_contact: new Date()
                }),
                // END SEEDS FOR USER 4
                //*************************************************
                //BEGIN SEEDS FOR USER 5
                knex('contacts').insert({
                    id: 21,
                    user_id: 5,
                    name: 'RogerS',
                    phone: '234-5678',
                    email: 'roger@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 7,
                    notes: 'Wife makes the BEST cookies, so call frequently',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 22,
                    user_id: 5,
                    name: 'Logan',
                    phone: '229-8678',
                    email: 'logan@gmail.com',
                    relationship: 'social',
                    frequency_of_contact: 14,
                    notes: 'Teaches without shoes frequently. Yucky!',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 23,
                    user_id: 5,
                    name: 'Jordan Maj',
                    phone: '984-5678',
                    email: 'jordan@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 120,
                    notes: 'Really long last name...can\'t remember!',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 24,
                    user_id: 5,
                    name: 'Micah',
                    phone: '834-5678',
                    email: 'micah@gmail.com',
                    relationship: 'social',
                    frequency_of_contact: 365,
                    notes: 'Thinks he\'s really good at ping pong, but...',
                    last_contact: new Date()
                }),

                knex('contacts').insert({
                    id: 25,
                    user_id: 5,
                    name: 'DB Cooper aka JIMMY',
                    phone: '987-2367',
                    email: 'db@gmail.com',
                    relationship: 'professional',
                    frequency_of_contact: 0,
                    notes: 'Only met once on a flight to Seattle. Took my monies. Damn him.',
                    last_contact: new Date()
                }),
                // END SEEDS FOR USER 5
                knex.raw('ALTER SEQUENCE contacts_id_seq RESTART WITH 26')
            ]);
        });
};
