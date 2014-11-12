var app = angular.module('lds-report');

app.controller('trendsCtrl', function($scope){
	$scope.reports = [];
	$scope.centers = [{name:'Temple Square'}];

	$scope.years = [2011, 2012, 2013, 2014];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	var date = new Date();
	$scope.year = date.getFullYear();
	$scope.month = date.getMonth();

	var start = 
	// reportService.getAllLFrom(start, end).then(function(data){
	// 	$scope.reports = data.data;
	// })
	// centerService.getAll().then(function(data){
	// 	$scope.centers = data.data;
	// })
});