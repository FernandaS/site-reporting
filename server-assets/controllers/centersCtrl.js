var centerService = require('../services/centerService');

module.exports = {
// remove console.logs after endpoints are working.
// rename reportService functions as necessary.
// parse out the req into the obj once I get keys from Aaron
	getCenter: function (req, res) {
		centerService.getCenter(req.body).then(function(data){
			console.log('getCenter worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	putCenter: function (req, res) {
		centerService.putCenter(req.body).then(function(data){
			console.log('putCenter worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	addCenter: function (req, res) {
		centerService.addCenter(req.body).then(function(data){
			console.log('addCenter worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	deleteCenter: function (req, res) {
		centerService.delCenter(req.body).then(function(data){
			console.log('deleteCenter worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	centersList: function (req, res) {
		centerService.centersList(req.body).then(function(data){
			console.log('centersList worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	}

}