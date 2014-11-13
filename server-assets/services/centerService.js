var Database = require('../models/index');
var Models = Database.models;
var Sequelize = Database.sequelize;
var Promise = require('bluebird');

var services = {
	addCenter: addCenter,
	putCenter: putCenter,
	delCenter: delCenter
};

module.exports = services;

//logic
function addCenter(cData){
	var center = Models.centers.build({
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

function putCenter(cData){
	return Models.centers.update(cData.updatedValues,
 	{
    	where: { id: cData.id }
 	});
};

function delCenter(cData){
	return Models.users.destroy({ id: cData.id});
};

