var userService = require('../services/userService');

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
	}/*,

	getCurrentUser: function (req, res) {
		authService.getCurrentUser(req.body).then(function(data){
			console.log('getCurrentUser worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	}
*/
}