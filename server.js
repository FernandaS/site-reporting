var express = require('express'),
	app = express(),
	env = require('./env/vars'),
	sql = require('sequelize'),
	session = require('express-session'),
	passport = require('passport'),
	bodyParser = require('body-parser'),
	LocalStrategy = require('passport-local').Strategy,
	port = env.expressPort,
	centersCtrl = require('./controllers/centersCtrl');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({ secret:  env.expressSecret, saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/api/centers', centersCtrl.addCenter);

//passport.use(new LocalStrategy());
app.listen(port, function(){
	console.log('Listening at ' + port);
});