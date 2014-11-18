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
	getAllUsers: getAllUsers,
	checkUser: checkUser
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
	return Models.users.find({ where: { username: username } }, { raw: true });
};

function getUserById(id){
	return Models.users.find({where: { id: id }}, {raw: true});
};

function checkUser(uData){
	return new Promise(function(resolve, reject){	
		Models.users.find({ where: { username: uData.username } }).then(function(user){
			if(user){
				var done = function(err, res){
					if(err) return reject(err);
					else if(res !== undefined){
						var obj = {
							id: user.id,
							role: user.role,
							auth: res
						};
						return resolve(obj);
					}
				};
				user.verifyPassword(uData.password, done);
			} else {
				resolve({id: null, role: null, auth: false});
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