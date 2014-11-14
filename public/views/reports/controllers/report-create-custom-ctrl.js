var app = angular.module('lds-report');

app.controller('reportCreateCustomCtrl', function($scope, reportService, centerService){

	$scope.reports = [];
	$scope.years = [2011, 2012, 2013, 2014, 2015];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	$scope.centers = [{name:'Temple Square'}];

	var getAllCenters = function(){
		centerService.getAll()
			.then(function(response){
				$scope.centers = response.data;
				console.log($scope.centers);
			})
	}

	getAllCenters();

});