var Database = require('../models/index');
var Models = Database.models;
var Sequelize = Database.sequelize;
var Promise = require('bluebird');

var services = {
	addEmail: addEmail,
	putEmail: putAddlEmails
};

module.exports = services;

//logic
function addEmail(eData){
	var email = Models.addl_emails.build({
		userId: eData.userId,
		email: eData.email
	});
	return email.save();
};

function putAddlEmails(eData){
	return new Promise(function(resolve, reject){
		Models.addl_emails.find({where: {id: eData.emailId}}).then(function(center){
			return center.updateAttributes(eData.updatedValues);
		}, function(err){
			reject(err);
		}).then(function(result){
			resolve(result);
		}, function(err){
			reject(err);
		});
	}); 
};

