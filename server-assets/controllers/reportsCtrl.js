var reportService = require('../services/reportService');

module.exports = {
// remove console.logs after endpoints are working.
// rename reportService functions as necessary.
// parse out the req into the obj once I get keys from Aaron
	getAllBy: function (req, res) {
		reportService.getAllByMonth(req.query).then(function(data){
			console.log('getAllBy worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	getAllFrom: function (req, res) {
		reportService.getAllByRange(req.query).then(function(data){
			console.log('getAllFrom worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	getOneBy: function (req, res) {
		var obj = {
			id: req.params.id,
			date: req.query.date
		};
		reportService.getOneByMonth(obj).then(function(data){
			console.log('getOneBy worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	addReport: function (req, res) {
		reportService.addReport(req.body).then(function(data){
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	editReport: function (req, res) {
		var obj = {
			id: Number(req.params.id),
			updatedValues: req.body
		};
		console.log({id: 9, updatedValues:{visitor_total: 9001}});
		reportService.putReport(obj).then(function(data){
			console.log('editReport worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	deleteReport: function (req, res) {
		reportService.delReport(req.params).then(function(data){
			console.log('deleteReport worked');
			console.log(data);
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},
}