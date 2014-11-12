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
*/

//adds getReports and setReports methods to new instances of models.users
//adds users_id to models.reports

models.users.hasMany(models.reports, { foreignKey: 'user_id', as: 'Reports'});
models.users.hasMany(models.addl_emails, { foreignKey: 'user_id', as: 'secondaryEmails'});
models.users.hasMany(models.centers, {foreignKey: 'user_id', as: 'Centers'});
models.centers.hasMany(models.reports, { foreignKey: 'center_id', as: 'Reports'});

sequelize.sync().then(function() {
  console.log('Database synced');
}, function(err) {
  console.error(err);
});

module.exports = {
	models: models,
	sequelize: sequelize
};

