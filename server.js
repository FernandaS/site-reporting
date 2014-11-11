var express = require('express'),
	app = express(),
	sql = require('sequelize'),
	session = require('express-session'),
	passport = require('passport'),
	bodyParser = require('body-parser'),
	middleware = require('./middleware.js'),
	LocalStrategy = require('passport-local').Strategy,
	port = env.express_port || 9001,
	dbRef = env.express_db,
	dbHost = env.express_dbHost || 104.236.13.205;

var sequelize = new sql('database', 'user', 'password', {
	// Move to env
	host: dbHost
})

// Move the middleware to ./middlware.js
app.use(express.static(_dirname + '.public'));
app.use(bodyParser.json());
app.use(session({secret: 'quando omni flunkus moritati'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
	function(user, password, done) {
		User.findOne({ user: user }, function (err, user) {
			
		})
	}))

app.listen(port, function(){
	console.log('Listening at ' + port);
});