var database = require('../models/index');
var models = database.models;
var sequelize = database.sequelize;

var services = {
	addUser: addUser
};

// module.exports = function(){
// 	return services;
// };

module.exports = services;

//logic
function addUser(uData){
	var user = models.users.build({
		username: uData.username,
		password: uData.password,
		role: uData.role,
		email: uData.email
	});
	return user.save();
};