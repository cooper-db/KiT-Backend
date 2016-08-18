'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var jwt = require('jsonwebtoken');


// GET /users/:id/contacts -- Display all contacts
router.get('/:id/contacts', function (req, res, next) {
    //grab all the contacts for the current user from the db
    let id = req.params.id;
    console.log(id);
    return knex('contacts')
        .select('*')
        .where('user_id', id)
        .then(function (data) {
            console.log(data);
            res.json(data);
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({
                err: err
            });
        });


    //show contacts list

});


// POST /users/:id/contacts -- Create a new contact
router.post('/:id/contacts', function (req, res, next) {
    //test route
    // res.send('users/:id/contacts POST route hit successfully');

    //set up new contact
    let id = req.user.id;
    let now = new Date();
    let newContact = {
        user_id: id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        relationship: req.body.relationship,
        frequency_of_contact: req.body.frequency_of_contact,
        notes: req.body.notes,
        last_contact: now
    };
    console.log(newContact);

    // post new contact to db
    return knex('contacts')
        .insert(newContact)
        .then(function (data) {
            console.log(data);
            res.json(data);
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({
                err: err
            });
        });


    //show NEW contact form

});


// PUT/users/:id/contacts/:id -- Update a contact
router.put('/:id/contacts/:contactID', function (req, res, next) {
    //test route
    // res.send('users/:id/contacts/:id PUT route hit successfully');

    //set up updated contact
    let user_id = req.params.id;
    let contactID = req.params.contactID;

    // note: anything undefined in the update will be ignored by Postgres, so this format should NOT cause errors!
    let updatedContact = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        relationship: req.body.relationship,
        frequency_of_contact: req.body.frequency_of_contact,
        notes: req.body.notes,
        last_contact: req.body.last_contact
    };
    console.log(updatedContact);

    // put updated contact to db
    return knex('contacts')
        .where('id', '=', contactID)
        .update(updatedContact, '*')
        .then(function (data) {
            console.log(data);
            res.json(data);
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({
                err: err
            });
        });
    //show UPDATE contact form
});


//DELETE/users/:id/contacts/:id -- Delete a contact
router.delete('/:id/contacts/:contactID', function (req, res, next) {
    //test route
    // res.send('users/:id/contacts/:id DELETE route hit successfully');

    //set up contact to delete
    let contactID = req.params.contactID;

    // delete contact from db
    return knex('contacts')
        .where('id', '=', contactID)
        .del()
        .then(function (data) {
            console.log(data);
            res.json(data);
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({
                err: err
            });
        });
    //delete
});


module.exports = router;
