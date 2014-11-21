var keyindicatorService = require('../services/keyindicatorService');
var phantom = require('phantom-render-stream');
var fs = require('fs');
var render = phantom();

module.exports = {
// remove console.logs after endpoints are working.
// rename keyindicatorService functions as necessary.
// parse out the req into the obj once I get keys from Aaron
	getAllBy: function (req, res) {
		keyindicatorService.getAllByMonth(req.query).then(function(data){
			console.log('getAllBy worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	getAllFrom: function (req, res) {
		keyindicatorService.getAllByRange(req.query).then(function(data){
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
		keyindicatorService.getOneByMonth(obj).then(function(data){
			console.log('getOneBy worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	addReport: function (req, res) {
		keyindicatorService.addReport(req.body).then(function(data){
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
		keyindicatorService.putReport(obj).then(function(data){
			console.log('editReport worked');
			res.status(200).send(data);
		}, function(err){
			consreportServiceole.log(err);
			res.send(err);
		});
	},

	deleteReport: function (req, res) {
		keyindicatorService.delReport(req.params).then(function(data){
			console.log('deleteReport worked');
			data = {delete: data};
			console.log(data);
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	getAllReportsByCenterId: function (req, res) {
		keyindicatorService.getAllReportsByCenterId(req.params.id).then(function(data){
			console.log('getAllReportsByCenterId worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},
	
	sendReport: function (req, res) {
		var filename  = 'ki-report_' + req.params.date + '.pdf';
		res.setHeader('Content-disposition', 'attachment; filename=' + filename);
		res.type("application/pdf");
		render('http://localhost:9001/#/reports/ki/' + req.params.date, {format:'pdf', width: '100px', margin: '30px', orientation: 'landscape'})
		.pipe(res) || res.status(500).end();
	}
};