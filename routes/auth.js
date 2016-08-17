'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

//function checks to see if user already exists in db
function userExistsInDB(username) {
  return knex.select('*').from('users').where({username: username});
}

router.post('/signup', function(req, res, next){
  var user = {
    username: req.body.username,
    password: req.body.password
  };
  //check if username exists in db...
  userExistsInDB(user.username)
    .then(function(result) {
      //Roger suggests IF TIME move below logic to userExistsInDB function, returning promise
      if (result.length >=1) {
        //user already exists in system
        res.status(401).send({message:'Username already exists'});
        return;

      } else {
        //create the new user
        //below bcrypt can also be integrated into userExistsInDB function
        bcrypt.genSalt(10, function(err, salt){
          bcrypt.hash(req.body.password, salt, function(err, hash) {
            knex('users').insert({
              username: req.body.username,
              password: hash
            }).returning('id')

            //JWT token...is this the correct/best way to do this?
            .then(function(id){
              var profile = {
                id: id[0],
                username: user.username
              };
              var token = jwt.sign(profile, process.env.SECRET);
              res.status(200).json({ token:token });
            })

            .catch(function(err){
              res.status(500).json({err:err});
            });
          });
        });
      }
    });
});


router.post('/login', function(req, res, next) {
    var user = {
      username: req.body.username,
      password: req.body.password
    };
  //check if username exists in db...
  userExistsInDB(user.username)
    .then(function(result){
      user.id = result[0].id;
      if (result.length === 0) {
        //user does not exist in system
        res.status(401).json({message:'That username does not exist'});
        return;
      } else {
            bcrypt.compare(user.password, result[0].password, function(err, result) {
              if (result === false) {
            // if(user.password !== result.password) {
                res.status(401).send({message:'Wrong user or password'});
                return;
              } else {
                var profile = {
                  id: user.id,
                  username: user.username
                };
                var token = jwt.sign(profile, process.env.SECRET);
                res.status(200).json({ token:token, id:profile.id });
              }
            // });
          });
        }
    });
});

module.exports = router;
