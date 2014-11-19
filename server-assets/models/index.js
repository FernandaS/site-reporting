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

models.users.hasMany(models.reports, { as: 'Reports'});
models.users.hasMany(models.keyindicators, { as: 'Indicators'});
models.users.hasMany(models.addl_emails, { as: 'secondaryEmails'});
models.users.hasMany(models.centers, { as: 'Centers'});
models.centers.hasMany(models.reports, { as: 'Reports'});
models.centers.hasMany(models.keyindicators, { as: 'Indicators'});

sequelize.sync().then(function() {
  console.log('Database synced');
}, function(err) {
  console.error(err);
});


module.exports = {
	models: models,
	sequelize: sequelize
};