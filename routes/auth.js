'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

//function checks to see if user already exists in db
function userExistsInDB(username) {
  console.log('checking to see if the user already exists...');
  return knex.select('username').from('users').where({username: username});
}

router.post('/signup', function(req, res, next){
  var user = {
    username: req.body.username,
    password: req.body.password
  };

  //check if username exists in db...
  userExistsInDB(user.username)
    .then(function(result) {

      if (result.length >=1) {
        //user already exists in system
        res.status(401).send({message:'Username already exists'});
        return;

      } else {
        //create the new user
        bcrypt.genSalt(10, function(err, salt){
          bcrypt.hash(req.body.password, salt, function(err, hash) {
            knex('users').insert({
              username: req.body.username,
              password: hash
            })

            //HOW TO AUTOMATICALLY SIGN IN THE USER WITH JWT STUFF?

            .then(function(data){
              res.json(data);
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
      if (result.length === 0) {
        console.log("*********");
        console.log(result);
        //user does not exist in system
        res.status(401).send({message:'That username does not exist'});
        return;
      } else {
        console.log(result);
        return knex('users')
          .where({username: user.username})
          .then(function(data){
            console.log(data);
            bcrypt.compare(user.password, data[0].password, function(err, result) {
              if (result === false) {
                res.status(401).send({message:'Wrong user or password'});
                return;
              } else {
                console.log('password matches!');
                var profile = {
                  id: data[0].id,
                  username: user.username
                };
                var token = jwt.sign(profile, 'process.env.SECRET');
                console.log(token);
                res.status(200).json({ token:token });
              }
            });
          });
        }
    });
});


module.exports = router;
