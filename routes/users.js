'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var jwt = require('jsonwebtoken');


// GET /users/:id/contacts -- Display all contacts
router.get('users/:id/contacts', function (req, res, next) {
    //show contacts list
})


// POST /users/:id/contacts -- Create a new contact
router.post('users/:id/contacts', function (req, res, next) {
    //check for existing contact w/ same info

    //show NEW contact form

})


// PUT/users/:id/contacts/:id -- Update a contact
router.put('users/:id/contacts/:id', function (req, res, next) {
    //show UPDATE contact form
})


//DELETE/users/:id/contacts/:id -- Delete a contact
router.delete('users/:id/contacts/:id', function (req, res, next) {
    //delete
})


module.exports = router;
