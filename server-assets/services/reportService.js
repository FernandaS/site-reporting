var Database = require('../models/index');
var Models = Database.models;
var Sequelize = Database.sequelize;
var Promise = require('bluebird');
var services = {
	addReport: addReport,
	putReport: putReport
};

module.exports = services;

//logic
function addReport(rData){
	var report = Models.reports.build({
		userId: rData.userId,
		centerId: rData.centerId,
		date: rData.date,
		visitor_total: rData.visitor_total,
		visitor_tour: rData.visitor_tour,
		visitor_tournonmember: rData.visitor_tournonmember,
		referral_cards: rData.referral_cards,
		referral_called: rData.referral_called,
		referral_inbound: rData.referral_inbound,
		referral_member: rData.referral_member,
		comments: rData.comments
	});
	return report.save();
};

//updateAttributes will drop keys that are not columns in the database
function putReport(rData){
	return new Promise(function(resolve, reject){
		Models.reports.find({where: {id: rData.reportId}}).then(function(report){
			return report.updateAttributes(rData.updatedValues);
		}, function(err){
			reject(err);
		}).then(function(result){
			resolve(result);
		}, function(err){
			reject(err);
		});
	}); 
};
