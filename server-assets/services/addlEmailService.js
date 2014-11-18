var Database = require('../models/index');
var Models = Database.models;
var Sequelize = Database.sequelize;
var Promise = require('bluebird');

var services = {
	addEmail: addEmail,
	putEmail: putAddlEmails,
	delEmail: delAddlEmail
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
	return Models.addl_emails.update(eData.updatedValues,
 	{
    	where: { id: eData.id }
 	});
};

function delAddlEmail(eData){
	return Models.addl_emails.destroy({ where: { id: eData.id } });
};