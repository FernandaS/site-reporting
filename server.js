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
centersCtrl = require('./server-assets/controllers/centersCtrl'),
usersCtrl = require('./server-assets/controllers/usersCtrl'),
reportsCtrl = require('./server-assets/controllers/reportsCtrl'),
middleware = require('./server-assets/middleware/middleware'),
authCtrl = require('./server-assets/controllers/authCtrl'),
emailsCtrl = require('./server-assets/controllers/emailsCtrl'),
keyIndicatorCtrl = require('./server-assets/controllers/keyIndicatorCtrl'),
bcrypt = require('bcrypt');

passport.use(new LocalStrategy(function(username, pass, done) {
	userService.getUser(username).then(function (user) {
		if (!user) {
			console.log('Unknown user' + username);
			return done(null, false, { message: 'Unknown user ' + username });
		}
		bcrypt.compare(pass, user.password, function(err, res) {
			if (!res){
				console.log('Invalid password');
				return done(null, false, { message: 'Invalid password' });
			}
			delete user.password;
			console.log(pass, user);	
			return done(null, user);			
		})
	});
}));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	userService.getUserById(id).then(function (user) {
		done(null, user);
	});
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({ secret:  env.expressSecret, saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

// Center app

app.get('/api/centers/:id', middleware.requireAuth, centersCtrl.getCenter);
app.get('/api/centers/', middleware.requireAuth, middleware.ensureAdmin, centersCtrl.getAll);
app.post('/api/centers', middleware.requireAuth, middleware.ensureAdmin, centersCtrl.addCenter);
app.put('/api/centers/:id', middleware.requireAuth, middleware.ensureAdmin, centersCtrl.putCenter);
app.delete('/api/centers/:id', middleware.requireAuth, middleware.ensureAdmin, centersCtrl.deleteCenter);

// User apis
app.get('/api/users/me', function(req, res){
	res.json(req.user);
});
app.get('/api/users/:id', middleware.requireAuth, usersCtrl.getUser);
app.get('/api/users', middleware.requireAuth, middleware.ensureAdmin, usersCtrl.getAllUsers);
app.post('/api/users', middleware.requireAuth, middleware.ensureAdmin, usersCtrl.addUser);
app.put('/api/users/:id', middleware.requireAuth, usersCtrl.putUser);
app.delete('/api/users/:id', middleware.requireAuth, middleware.ensureAdmin, usersCtrl.deleteUser);

// Report apis, will add the apis with params after I figure it out. Or Aaron figures it out.
app.get('/api/reports/allBy', middleware.requireAuth, middleware.ensureAdmin, reportsCtrl.getAllBy); //month
app.get('/api/reports/allFrom', middleware.requireAuth, middleware.ensureAdmin, reportsCtrl.getAllFrom); //month
app.get('/api/reports/oneBy/:id', middleware.requireAuth, reportsCtrl.getOneBy); //center and month
app.post('/api/reports', middleware.requireAuth, reportsCtrl.addReport);
app.put('/api/reports/:id', middleware.requireAuth, reportsCtrl.editReport);
app.delete('/api/reports/:id', middleware.requireAuth, middleware.ensureAdmin, reportsCtrl.deleteReport);

// key indicator apis
app.get('/api/reports/ki/allBy', middleware.requireAuth, middleware.ensureAdmin, keyIndicatorCtrl.getAllBy); //month
app.get('/api/reports/ki/allFrom', middleware.requireAuth, middleware.ensureAdmin, keyIndicatorCtrl.getAllFrom); //month
app.get('/api/reports/ki/oneBy/:id', middleware.requireAuth, keyIndicatorCtrl.getOneBy); //center and month
app.post('/api/reports/ki', middleware.requireAuth, keyIndicatorCtrl.addReport);
app.put('/api/reports/ki/:id', middleware.requireAuth, keyIndicatorCtrl.editReport);
app.delete('/api/reports/ki/:id', middleware.requireAuth, middleware.ensureAdmin, keyIndicatorCtrl.deleteReport);

// Additional emails
app.post('/api/addlEmails/:id', emailsCtrl.addEmail);
app.put('/api/addlEmails/:id', emailsCtrl.putAddlEmails);
app.delete('/api/addlEmails/:id', emailsCtrl.delAddlEmail);

app.post('/api/test', function(req, res){
	console.log(req.query.start, req.query.end);
	res.end();
})

// Auth apis
// app.post('/api/login', passport.authenticate('local', { failureRedirect: '#/login' }), function(req, res){
// 	res.send(req.user);
// });
app.post('/api/login', authCtrl.authenticateUser);
// app.get('/api/user/me', authCtrl.getCurrentUser);
app.get('/api/logout', function(req, res){
	req.logout();
	res.redirect('#/login');
});

// Download APIS
app.get('/api/download/site/:date'/*, middleware.requireAuth, middleware.ensureAdmin*/, reportsCtrl.sendReport);
//passport.use(new LocalStrategy());
app.get('/api/download/ki/:date'/*, middleware.requireAuth, middleware.ensureAdmin*/, reportsCtrl.sendKiReport);

app.listen(port, function(){
	console.log('Listening at ' + port);
});