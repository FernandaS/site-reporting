var Database = require('../models/index');
var Models = Database.models;
var Sequelize = Database.sequelize;
var Promise = require('bluebird');

var services = {
	addCenter: addCenter,
	putCenter: putCenter
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
	return new Promise(function(resolve, reject){
		Models.centers.find({where: {id: cData.userId}}).then(function(center){
			return center.updateAttributes(cData.updatedValues);
		}, function(err){
			reject(err);
		}).then(function(result){
			resolve(result);
		}, function(err){
			reject(err);
		});
	}); 
};

