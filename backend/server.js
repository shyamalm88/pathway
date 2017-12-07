var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var router = express.Router();



//mongodb connection
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);






var app = express();
var server = require('http').createServer(app);



// app usage codes
//app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());





require('./config/passport')(passport); // pass passport for configuration

//cookie configuration
var sess = {
    secret: 'ArghyaPathway', // session secret
    resave: true,
    saveUninitialized: true,
    cookie: {},
    rolling: true
};






app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//passport initialize and passport session initialize
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// routes ======================================================================
require('./routes/authRoutes.js')(app, passport); // load our routes and pass in our app and fully configured passport


//indicating routing files to index.html
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});














var port = process.env.PORT || 4200;
server.listen(port, function() {
    console.log('Server up: http://localhost:' + port);
});