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

//function validates password
function checkPassword(req, info) {
  console.log('entered checkPassword function');
  info.password = req.body.password;
  info.error.password = [];
  if(req.body.password.length <= 7) {
    info.passwordError = true;
    info.error.password.push({message: "Password should be 8 or more characters."});
  }
  var regex = /[A-Za-z]/;
  if (!req.body.password.match(regex)) {
    info.passwordError = true;
    info.error.password.push({message: "Password must contain at least one letter."});
  }
  var regex = /\W/g;
  if (!req.body.password.match(regex)) {
    info.passwordError = true;
    info.error.password.push({message: "Password must contain at least one special character."});
  }
}


router.post('/signup', function(req, res, next){
  var user = {
    username: req.body.username,
    password: req.body.password
  };
  var info = {
    user: req.body.username,
    passwordError: false,
    error: {}
  };

  //validate password
  checkPassword(req, info);

  //check if username exists in db...
  userExistsInDB(user.username)
    .then(function(result) {
      //Roger suggests IF TIME move below logic to userExistsInDB function, returning promise

      if (info.passwordError) {
        console.log("Can't sign up with that password, fool!");
        res.status(401).json(info.error);
        return;
      } else if (result.length >=1) {
        //user already exists in system
        res.status(401).json({message:'Username already exists'});
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
    if (result.length === 0) {
      //user does not exist in system
      res.status(401).json({message:'Username does not exist.'});
      return;
    } else {
      user.id = result[0].id;
      bcrypt.compare(user.password, result[0].password, function(err, result) {
        console.log(result);
        if (result === false) {
      // if(user.password !== result.password) {
          res.status(401).send({message:'Incorrect username or password'});
          return;
        } else {
          var profile = {
            id: user.id,
            username: user.username
          };
          console.log(profile);
          var token = jwt.sign(profile, process.env.SECRET);
          res.status(200).json({ token:token, id:profile.id });
        }
            // });
      })
      .catch(function(err) {
        console.log(err);
      });
    }
  });
});

module.exports = router;
