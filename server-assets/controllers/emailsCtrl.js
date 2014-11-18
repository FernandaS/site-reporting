var addlEmailService = require('../services/addlEmailService');

module.exports = {

	addEmail: function (req, res) {
		var obj = {
			userId: Number(req.params.id),
			email: req.body.email
		};
		addlEmailService.addEmail(obj).then(function(data){
			console.log('addEmail worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	putAddlEmails: function (req, res) {
		var obj = {
			id: Number(req.params.id),
			updatedValues: req.body
		};
		addlEmailService.putEmail(obj).then(function(data){
			console.log('putAddlEmails worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	delAddlEmail: function (req, res) {
		addlEmailService.delEmail(req.params).then(function(data){
			console.log('delAddlEmail worked');
			console.log(data);
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	}

};