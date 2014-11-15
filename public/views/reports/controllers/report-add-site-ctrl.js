var app = angular.module('lds-report');

app.controller('reportAddSiteCtrl', function($scope, reportService, centerService){

	$scope.reports = [];
	$scope.years = [2011, 2012, 2013, 2014, 2015];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	$scope.centers = [{name:'Temple Square'}];

	// $scope.newReport.date = $scope.selectedMonth + ' 1, ' + $scope.selectedYear
	// 		console.log($scope.newReport.date);
	// 	}

	var getAllCenters = function(){
		centerService.getAll()
			.then(function(response){
				$scope.centers = response.data;
				console.log($scope.centers);
			})
	}

	getAllCenters();

	$scope.addNewSiteReport = function(newReport){
		reportService.create($scope.newReport)
		console.log($scope.newReport);
		$scope.newReport = "";
	}

});