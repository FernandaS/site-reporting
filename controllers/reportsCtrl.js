var reportService = require('./services/reportService');

module.exports = {
// remove console.logs after endpoints are working.
// rename reportService functions as necessary.
// parse out the req into the obj once I get keys from Aaron
	getReport: function (req, res) {
		var obj = {}
		reportsService.getReport(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('getReport worked');
				res.status(200).send(res);
			};
		});
	},

	addReport: function (req, res) {
		var obj = {};
		reportsService.addReport(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('addReport worked');
				res.status(200).send(res);
			};
		});
	},

	deleteReport: function (req, res) {
		var obj = {}
		reportsService.deleteReport(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('deleteReport worked');
				res.status(200).send(res);
			};
		});
	},

// may not use this function and just use getAllData
	reportList: function (req, res) {
		var obj = {}
		reportsService.reportList(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('reportList worked');
				res.status(200).send(res);
			};
		});
	},

	getReportsList: function (req, res) {
		var obj = {}
		reportsService.getReportsList(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('getReportsList worked');
				res.status(200).send(res);
			};
		});
	},

	getAllData: function (req, res) {
		var obj = {}
		reportsService.getAllData(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('getAllData worked');
				res.status(200).send(res);
			};
		});
	},

	getRange: function (req, res) {
		var obj = {}
		reportsService.getRange(obj).then(function(err, res) {
			if(err) {
				console.log(err);
				res.send(err);
			} else {
				console.log('getRange worked');
				res.status(200).send(res);
			};
		});
	};

}