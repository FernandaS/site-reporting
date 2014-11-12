var env = require('../env/vars'),
	Sequelize = require('sequelize'),
	dbUser = env.dbUser,
	dbPass = env.dbPass,
	dbHost = env.dbHost,
	dbName = env.dbName;

var sequelize = new Sequelize(dbName, dbUser, dbPass, {
	host: dbHost
});

var models = require('sequelize-import')(__dirname, sequelize, { 
    exclude: ['index.js'] 
});

/* Relationships
one to many  -- one user to many reports
one to many -- one user to many emails
one to many -- one user to many centers
one to many -- one center to many reports
---------------------------------------------
http://sequelizejs.com/docs/latest/associations
http://stackoverflow.com/questions/20460270/how-to-make-join-querys-using-sequelize-in-nodejs
One-To-Many associations are connecting one source with multiple targets. 
The targets however are again connected to exactly one specific source.
http://sequelizejs.com/docs/latest/models#eager-loading
http://stackoverflow.com/questions/8158244/how-to-update-a-record-using-sequelize-for-node?rq=1
http://stackoverflow.com/questions/21046903/sequelize-findorcreate-insert-new-row-but-return-object-with-primary-key-undefin
Look at http://sequelizejs.com/docs/latest/models under Data retrieval / Finders
*/

models.users.hasMany(models.reports, { as: 'Reports'});
models.users.hasMany(models.addl_emails, { as: 'secondaryEmails'});
models.users.hasMany(models.centers, { as: 'Centers'});
models.centers.hasMany(models.reports, { as: 'Reports'});

sequelize.sync().then(function() {
  console.log('Database synced');
}, function(err) {
  console.error(err);
});

module.exports = {
	models: models,
	sequelize: sequelize
};