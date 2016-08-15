'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



router.post('/signup', function(req, res, next){
    //test routes
    res.send('/auth/signup POST route hit successfully');

  //check if username exists in db...

  //if username DOES exist, send error message


  //if username does NOT exist, create user...
  //jwt
  //bcrypt
  //session.token && send to user route


});



router.post('/login', function(req, res, next) {
    //test route
    res.send('/auth/login POST route hit successfully');

  //check if username exists in db...


  //if username DOES exist...
  //check against password submitted in req.body



  //if username && password DON'T match...
  //return error



  //if they DO match...
  //session.token && send to users


});


module.exports = router;
