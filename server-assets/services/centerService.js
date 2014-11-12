var database = require('../models/index');
var models = database.models;
var sequelize = database.sequelize;

var services = {
	addCenter: addCenter
};

// module.exports = function(){
// 	return services;
// };

module.exports = services;

//logic
function addCenter(cData){
	var center = models.centers.build({
		userId: cData.userId,
		center: cData.center,
		alias: cData.alias,
		active: cData.active,
		type: cData.type,
		city: cData.city,
		state: cData.state,
		country: cData.country
	});
	return center.save();
};

