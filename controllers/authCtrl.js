var authService = require('./services/authService');

module.exports = {
// remove console.logs after endpoints are working.
// rename reportService functions as necessary.
// parse out the req into the obj once I get keys from Aaron
	addCenter: function (req, res) {
		authService.addCenter(req.body).then(function(data){
			console.log('addCenter worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	deleteCenter: function (req, res) {
		authService.deleteCenter(req.body).then(function(data){
			console.log('deleteCenter worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	centersList: function (req, res) {
		authService.centersList(req.body).then(function(data){
			console.log('centersList worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	};

}