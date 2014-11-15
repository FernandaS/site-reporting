var Database = require('../models/index');
var Models = Database.models;
var Sequelize = Database.sequelize;
var Promise = require('bluebird');

var services = {
	addCenter: addCenter,
	putCenter: putCenter,
	delCenter: delCenter,
	getAllCenters: getAllCenters,
	getOne: getOne
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
	console.log(cData);
	return Models.centers.destroy({ where: { id: cData.id } });
};

function getOne(id){
	return Models.centers.find({where: {id: id}})
}

function getAllCenters(){
	return Models.centers.findAll();
};

