var express = require('express'),
	app = express(),
	env = require('./env/vars');
	sql = require('sequelize'),
	session = require('express-session'),
	passport = require('passport'),
	bodyParser = require('body-parser'),
	middleware = require('./middleware.js'),
	LocalStrategy = require('passport-local').Strategy,
	port = process.env.express_port || 9001,
	dbUser = env.dbUser,
	dbPass = env.dbPass,
	dbHost = env.dbHost;
	dbName = env.dbName;

var sequelize = new sql(dbName, dbUser, dbPass, {
	// Move to env
	host: dbHost
});

// Move the middleware to ./middlware.js
app.use(express.static(__dirname + '.public'));
app.use(bodyParser.json());
app.use(session({ secret:  env.expressSecret, saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
	function(user, password, done) {
		User.findOne({ user: user }, function (err, user) {
			
		});
	}));

app.listen(port, function(){
	console.log('Listening at ' + port);
});