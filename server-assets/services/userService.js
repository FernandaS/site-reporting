var Database = require('../models/index');
var Models = Database.models;
var Sequelize = Database.sequelize;
var Promise = require('bluebird');

var services = {
	addUser: addUser,
	putUser: putUser
};

module.exports = services;

//logic
function addUser(uData){
	var user = Models.users.build({
		username: uData.username,
		password: uData.password,
		role: uData.role,
		email: uData.email
	});
	return user.save();
};

//updateAttributes will drop keys that are not columns in the database
function putUser(uData){
	return new Promise(function(resolve, reject){
		Models.users.find({where: {id: uData.userId}}).then(function(user){
			return user.updateAttributes(uData.updatedValues);
		}, function(err){
			reject(err);
		}).then(function(result){
			resolve(result);
		}, function(err){
			reject(err);
		});
	}); 
};