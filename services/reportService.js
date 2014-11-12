var database = require('../models/index');
var models = database.models;
var sequelize = database.sequelize;

var services = {
	addReport: addReport
};

module.exports = function(){
	return services;
};

//logic
function addReport(rData){
	var report = models.reports.build({
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

