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
    res.send('users/:id/contacts POST route hit successfully');

    //check for existing contact w/ same info

    //show NEW contact form

});


// PUT/users/:id/contacts/:id -- Update a contact
router.put('/:id/contacts/:id', function (req, res, next) {
    //test route
    res.send('users/:id/contacts/:id PUT route hit successfully');

    //show UPDATE contact form
});


//DELETE/users/:id/contacts/:id -- Delete a contact
router.delete('/:id/contacts/:id', function (req, res, next) {
    //test route
    res.send('users/:id/contacts/:id DELETE route hit successfully');

    //delete
});


module.exports = router;
