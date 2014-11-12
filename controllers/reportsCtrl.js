var reportService = require('./services/reportService');

module.exports = {
// remove console.logs after endpoints are working.
// rename reportService functions as necessary.
// parse out the req into the obj once I get keys from Aaron
	getReport: function (req, res) {
		reportService.getReport(req.body).then(function(data){
			console.log('getReport worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	addReport: function (req, res) {
		reportService.addReport(req.body).then(function(data){
			console.log('addReport worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	deleteReport: function (req, res) {
		reportService.deleteReport(req.body).then(function(data){
			console.log('deleteReport worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},
// may not use this function and just use getAllData
	reportList: function (req, res) {
		reportService.reportList(req.body).then(function(data){
			console.log('reportList worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	getReportsList: function (req, res) {
		reportService.getReportsList(req.body).then(function(data){
			console.log('getReportsList worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	getAllData: function (req, res) {
		reportService.getAllData(req.body).then(function(data){
			console.log('getAllData worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	getRange: function (req, res) {
		reportService.getRange(req.body).then(function(data){
			console.log('getRange worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	};

}