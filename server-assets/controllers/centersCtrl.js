var centerService = require('../services/centerService');

module.exports = {
// remove console.logs after endpoints are working.
// rename reportService functions as necessary.
// parse out the req into the obj once I get keys from Aaron
	getCenter: function (req, res) {
		centerService.getOne(req.params.id).then(function(data){
			console.log('getCenter worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	putCenter: function (req, res) {
		var obj = {
			id: req.params.id,
			updatedValues: req.body
		}
		centerService.putCenter(obj).then(function(data){
			console.log('putCenter worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	addCenter: function (req, res) {
		centerService.addCenter(req.body).then(function(data){
			console.log('addCenter worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	deleteCenter: function (req, res) {
		centerService.delCenter({id: req.params.id}).then(function(data){
			console.log('deleteCenter worked');
			data = {delete: data};
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	},

	getAll: function (req, res) {
		centerService.getAllCenters().then(function(data){
			console.log('getAll worked');
			res.status(200).send(data);
		}, function(err){
			console.log(err);
			res.send(err);
		})
	}

}