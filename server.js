var express = require('express'),
	app = express(),
	env = require('./server-assets/env/vars'),
	sql = require('sequelize'),
	session = require('express-session'),
	passport = require('passport'),
	bodyParser = require('body-parser'),
	LocalStrategy = require('passport-local').Strategy,
	port = env.expressPort,
	userService = require('./server-assets/services/userService'),
	// authCtrl = require('./server-assets/controllers/authCtrl'),
	centersCtrl = require('./server-assets/controllers/centersCtrl'),
	usersCtrl = require('./server-assets/controllers/usersCtrl'),
	reportsCtrl = require('./server-assets/controllers/reportsCtrl');
	// authCtrl = require('./server-assets/controllers/authCtrl');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({ secret:  env.expressSecret, saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	console.log('am i human');
	 User.find(id, function (err, user) {
	 	done(err, user);
	 });
});

passport.use(new LocalStrategy(
	function(username, pass, done) {
		console.log('did i get this far?');
		userService.getUser(username), function (err, user) {
			console.log(username);
			if (err) {
				return done(err);
			} if (!user) {
				return done(null, false, { message: 'Unknown user ' + username });
			} if (user.password !== pass) {
				return done(null, false, { message: 'Invalid password' });
			};
		};
	}));

var requireAuth = function(req, res, next) {
	if(!req.isAuthenticated()) {
		return res.status(401).end();
		res.redirect('#/login');
	}
	next();
}

// Center app
app.get('/api/centers/:id', centersCtrl.getCenter);
app.get('api/centers/', centersCtrl.centersList);
app.post('/api/centers', /*passport.authenticate('local', { failureRedirect: '/noworkieforyou' }),*/ centersCtrl.addCenter);
app.put('/api/centers/:id', centersCtrl.putCenter);
app.delete('/api/centers/:id', centersCtrl.deleteCenter);

// User apis
app.get('/api/users/me', usersCtrl.getCurrentUser);
app.get('/api/users/:id', usersCtrl.getUser);
app.get('/api/users', usersCtrl.getUsersList);
app.post('/api/users', usersCtrl.addUser);
app.put('/api/users/:id', usersCtrl.putUser);
app.delete('/api/users/:id', usersCtrl.deleteUser);

// Report apis, will add the apis with params after I figure it out. Or Aaron figures it out.
// app.get('/api/reports', )
app.post('/api/reports', reportsCtrl.addReport);
app.put('/api/reports/:id', reportsCtrl.editReport);
app.delete('/api/reports/:id', reportsCtrl.deleteReport);

app.post('/api/test', function(req, res){
	console.log(req.query.start, req.query.end);
	res.end();
})

// Auth apis
app.post('/api/login', passport.authenticate('local', { failureRedirect: '/login' }), usersCtrl.getUser);
// app.get('/api/user/me', authCtrl.getCurrentUser);
app.post('/api/logout', function(req, res){
	req.logout();
	res.redirect('#/login');
});

//passport.use(new LocalStrategy());
app.listen(port, function(){
	console.log('Listening at ' + port);
});