var express = require('express'),
	app = express(),
	env = require('./server-assets/env/vars'),
	sql = require('sequelize'),
	session = require('express-session'),
	passport = require('passport'),
	bodyParser = require('body-parser'),
	LocalStrategy = require('passport-local').Strategy,
	port = env.expressPort,
	centersCtrl = require('./server-assets/controllers/centersCtrl'),
	usersCtrl = require('./server-assets/controllers/usersCtrl');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({ secret:  env.expressSecret, saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

// Center apis
app.get('/api/centers/:id', centersCtrl.getCenter);
app.get('api/centers/', centersCtrl.centersList);
app.post('/api/centers', centersCtrl.addCenter);
app.put('/api/centers/:id', centersCtrl.putCenter);
app.delete('/api/centers/:id', centersCtrl.deleteCenter);

// User apis
app.get('/api/users/:id', usersCtrl.getUser);
app.get('/api/users', usersCtrl.getUsersList);
app.post('/api/users', usersCtrl.addUser);
app.put('/api/users/:id', usersCtrl.putUser);
app.delete('/api/users/:id', usersCtrl.deleteUser);

// Report apis



//passport.use(new LocalStrategy());
app.listen(port, function(){
	console.log('Listening at ' + port);
});