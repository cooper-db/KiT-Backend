'use strict';

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');



//GET/ -- Render home view (will show login/signup or suggested contact if authenticated)

router.get('/', function(req, res, next){

  //if authenticated...
  //go to users.js




  //if authenticating...
  //go to auth.js





});





module.exports = router;
