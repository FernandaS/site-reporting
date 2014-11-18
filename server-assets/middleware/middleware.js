module.exports = {

	requireAuth: function(req, res, next) {
		if(!req.isAuthenticated()) {
			return res.status(401).end();
		}
		next();
	},

	ensureAdmin: function(req, res, next) {
		console.log(req.user);
		if(req.user && req.user.role === 'ADMIN'){
			next();		
		} else {
			res.send(403);
		};
	}

};