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
	return Models.users.destroy({ id: uData.id });
};

function getUser(username){
	return Models.users.find({ where: { username: username } }, { raw: true });
};

function getUserById(id){
	return Models.users.find({where: { id: id }}, {raw: true});
};

//Creating additional function to prevent breakage elsewhere. We can use this function 
//entirely when we transition to it with passport and our controllers.
function checkUser(uData){
	return new Promise(function(resolve, reject){
		
		Models.users.find({ where: { username: uData.username } }).then(function(user){
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
		}, function(err){
			reject(err);
		});
	});
};

function getAllUsers(){
	return Models.users.findAll({ attributes: ['id', 'username', 'role', 'email']}, { raw: true });
};

checkUser({
	username: 'aaronR',
	password: 'hartwell1',
}).then(function(result){
	console.log(result);
});