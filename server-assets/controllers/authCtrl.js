var userService = require('../services/userService'),
	passport = require('passport');

module.exports = {
// remove console.logs after endpoints are working.
// rename reportService functions as necessary.
// parse out the req into the obj once I get keys from Aaron
	login: function (req, res) {
		console.log(req.body)
		userService.getUser(req.body).then(function(data){
			console.log('login worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	getCurrentUser: function (req, res) {
		authService.getCurrentUser(req.body).then(function(data){
			console.log('getCurrentUser worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	authenticateUser: function(req, res, next) {
	  if(req.logout){
	  	req.logout();
	  }
	  passport.authenticate('local', function(err, user, info) {
	    if (!user) {
	      return res.status(401).end();
	    }
	    req.logIn(user, function(err) {
	      return res.status(200).end();
	    });
	  })(req, res, next);
	}

}