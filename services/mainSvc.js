var database = require('../models/index.js');
var models = database.models;
var sequelize = database.sequelize;

var services = {

};

return services;



var item1 = Item.build({
    id: 1,
    name:'Laptop',
    description: 'Acer 2340TL',
    qty: 23
});
//Inserting Data into database
item1.save().complete(function (err) {
 if (err) {
    console.log('Error in Inserting Record');
 } else {
    console.log('Data successfully inserted');
 }
});