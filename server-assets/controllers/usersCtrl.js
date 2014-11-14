var userService = require('../services/userService');

module.exports = {
// remove console.logs after endpoints are working.
// rename userService functions as necessary.
// sending req.body object. Keys will have been established on the front end
	getUser: function (req, res) {
		userService.getUser(req.body).then(function(data){
			console.log('getUser worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	putUser: function (req, res) {
		userService.putUser(req.body).then(function(data){
			console.log('putUser worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	addUser: function (req, res) {
		userService.addUser(req.body).then(function(data){
			console.log('addUser worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	deleteUser: function (req, res) {
		userService.delUser(req.body).then(function(data){
			console.log('deleteUser worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	getAllUsers: function (req, res) {
		userService.getAllUsers().then(function(data){
			console.log('getAllUsers worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	getCurrentUser: function (req, res) {
		console.log(req.user);
		res.json(req.user);
	}

};