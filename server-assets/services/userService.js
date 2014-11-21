var Database = require('../models/index');
var Models = Database.models;
var Sequelize = Database.sequelize;
var Promise = require('bluebird');

var services = {
	addUser: addUser,
	putUser: putUser,
	delUser: delUser,
	getUser: getUser,
	getUserById: getUserById,
	getAllUsers: getAllUsers
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

function putUser(uData){
	return Models.users.update(uData.updatedValues,
	{
		where: { id: uData.id }
	});
};

function delUser(uData){
	return Models.users.destroy({ where: { id: uData.id } });
};

function getUser(username){
	return new Promise(function(resolve, reject){
		Models.users.findAll({ where: { username: username }, include: [{ 
			model: Models.centers, 
			as: 'Centers'}]}, 
			{ raw: true }).then(function(result){
				if(result[0] === undefined) return resolve(null);
				newResult = Sequelize.Utils._.chain(result)
				.groupBy('username').map(function(value, key){
					return {
						id: value[0].id, 
						username: value[0].username, 
						role: value[0].role, 
						email: value[0].email,
						password: value[0].password,
						centers: Sequelize.Utils._.chain(value).map(function(value, key){
							return {
								id: value['Centers.id'],
								center: value['Centers.center'],
								alias: value['Centers.alias'],
								active: value['Centers.active'],
								type: value['Centers.type'],
								city: value['Centers.city'],
								state: value['Centers.state'],
								country: value['Centers.country']
							}
						}).value()
					}
				}).value();
				if(newResult[0]){
					if(!newResult[0].centers[0].id){
						newResult[0].centers = null;
						resolve(newResult[0]);
					} else {
						resolve(newResult[0]);
					}
				}		
			}, function(err){
				reject(err);
			});

		});
};

function getUserById(id){
	return new Promise(function(resolve, reject){
		Models.users.findAll({ where: { id: id }, include: [{ 
			model: Models.centers, 
			as: 'Centers'}]}, 
			{ raw: true }).then(function(result){
				if(result[0] === undefined) return resolve(null);
				newResult = Sequelize.Utils._.chain(result)
				.groupBy('username').map(function(value, key){
					return {
						id: value[0].id, 
						username: value[0].username, 
						role: value[0].role, 
						email: value[0].email,
						password: value[0].password,
						centers: Sequelize.Utils._.chain(value).map(function(value, key){
							return {
								id: value['Centers.id'],
								center: value['Centers.center'],
								alias: value['Centers.alias'],
								active: value['Centers.active'],
								type: value['Centers.type'],
								city: value['Centers.city'],
								state: value['Centers.state'],
								country: value['Centers.country']
							}
						}).value()
					}
				}).value();
				if(newResult[0]){
					if(!newResult[0].centers[0].id){
						newResult[0].centers = null;
						resolve(newResult[0]);
					} else {
						resolve(newResult[0]);
					}
				}		
			}, function(err){
				reject(err);
			});

		});
};

function getAllUsers(){
	return new Promise(function(resolve, reject){
		Models.users.findAll({ attributes: ['id', 'username', 'role', 'email'], 
			include: [{ 
				model: Models.addl_emails, 
				as: 'secondaryEmails'
			}]}, { raw: true }).then(function(users){
				var organizedUsers = Sequelize.Utils._.chain(users).groupBy('username').map(function(value, key){
					var emailArray = [];
					emailArray.push(value[0].email || null);
					Sequelize.Utils._.map(value, function(email){
						var obj = {
							id: email['secondaryEmails.id'],
							email: email['secondaryEmails.email']
						};
						emailArray.push(obj);
					});
					return {
						id: value[0].id,
						username: value[0].username,
						role: value[0].role,
						email: value[0].email,
						secondaryEmails: emailArray.slice(1)
					}
				}).value();
				resolve(organizedUsers);
			}, function(err){
				reject(err);
			});
		});
};