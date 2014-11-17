var app = angular.module('lds-report');

app.controller('reportsCtrl', function($scope, reportService, centerService){
	$scope.reports = [];
	// $scope.centers = [{name:'Temple Square'}];

	$scope.years = [2011, 2012, 2013, 2014, 2015];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	var date = new Date();
	$scope.year = date.getFullYear();
	$scope.month = date.getMonth();
	$scope.updateSelectDate = function(){
		$scope.reportDate = $scope.selectedMonth + ' 1, ' + $scope.selectedYear
		// reportService.getListBy($scope.updateSelectDate).then(function(data){
		// 	$scope.reports = data.data;
		// })
	}
	// centerService.getAll().then(function(data){
	// 	$scope.centers = data.data;
	// })
	
	var getAllCenters = function(){
		centerService.getAll()
			.then(function(response){
				$scope.centers = response.data;
				console.log($scope.centers);
			})
	}

	getAllCenters();

});