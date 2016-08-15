'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


GET /users/:id/contacts -- Display all contacts

POST /users/:id/contacts -- Create a new contact

PUT/users/:id/contacts/:id -- Update a contact

DELETE/users/:id/contacts/:id -- Delete a contact



module.exports = router;
