var reportService = require('../services/reportService');
var phantom = require('phantom-render-stream');
var fs = require('fs');
var render = phantom();

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
			data = {delete: data};
			console.log(data);
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	getAllReportsByCenterId: function (req, res) {
		reportService.getAllReportsByCenterId(req.params.id).then(function(data){
			console.log('getAllReportsByCenterId worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		});
	},

	sendReport: function (req, res) {
		var filename = 'site-report_' + req.params.date + '.pdf';
		res.setHeader('Content-disposition', 'attachment; filename=' + filename);
		res.type("application/pdf");
		render('http://localhost:9001/#/reports/site/' + req.params.date, {format:'pdf', width: '100px', margin: '30px', orientation: 'landscape'})
		.pipe(res) || res.status(500).end();
	}
};