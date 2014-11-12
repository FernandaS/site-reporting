var usersService = require('./services/usersService');

module.exports = {
// remove console.logs after endpoints are working.
// rename usersService functions as necessary.
// parse out the req into the obj once I get keys from Aaron
	getUser: function (req, res) {
		var obj = {}
		usersService.getReport(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('getUser workedgit');
				res.status(200).send(res);
			};
		});
	},

	putUser: function (req, res) {
		var obj = {};
		usersService.putUser(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('putUser worked');
				res.status(200).send(res);
			};
		});
	},

	addUser: function (req, res) {
		var obj = {}
		usersService.addUser(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('deleteReport worked');
				res.status(200).send(res);
			};
		});
	},

	deleteUser: function (req, res) {
		var obj = {}
		usersService.deleteUser(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('deleteUser worked');
				res.status(200).send(res);
			};
		});
	},

	getUsersList: function (req, res) {
		var obj = {}
		usersService.getUsersList(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('getUsersList worked');
				res.status(200).send(res);
			};
		});
	}

}