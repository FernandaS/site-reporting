var database = require('../models/index');
var models = database.models;
var sequelize = database.sequelize;

var services = {
	addEmail: addEmail
};

module.exports = function(){
	return services;
};

//logic
function addEmail(eData){
	var email = models.addl_emails.build({
		userId: eData.userId,
		email: eData.email
	});
	return email.save();
};

