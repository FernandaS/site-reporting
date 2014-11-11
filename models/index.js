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
