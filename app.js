'use strict';


// require dependencies
require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const expressJwt = require('express-jwt');
const logger = require('morgan');
const index = require('./routes/index');
const users = require('./routes/users');
const auth = require('./routes/auth');


//fire up the app
const app = express();

// set port const
const port = process.env.PORT || 3000;


// use dependencies
app.use(logger('dev')); //TODO use env for logger
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(cors());


//routing

app.use('/', index);
app.use('/auth', auth); //no access if no token
app.use(expressJwt({secret: process.env.SECRET}));
app.use('/users', users); //, expressJwt({secret: 'KITSECRETKEY'})



// error handling
app.use(function (req, res, next) {
    let err = new Error('Route not found.');
    err.status = 404;
    next(err);
});

if(app.get('env') === 'development') {
    app.use(function (err, req, res, next) {  
        res.status(err.status || 500).json({err:err}); 
    });
}

app.use(function (err, req, res, next) { 
    res.status(err.status || 500);
});


//listen on appropriate port
app.listen(port, function () { 
    console.log('Application is running on port:', port);
});


//export app module
module.exports = app;
