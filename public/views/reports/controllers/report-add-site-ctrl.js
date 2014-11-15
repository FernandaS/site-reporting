var app = angular.module('lds-report');

app.controller('reportAddSiteCtrl', function($scope, reportService, centerService){

	$scope.reports = [];
	$scope.years = [2011, 2012, 2013, 2014, 2015];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	$scope.centers = [{name:'Temple Square'}];

	// $scope.newReport.date = $scope.selectedMonth + ' 1, ' + $scope.selectedYear
	// 		console.log($scope.newReport.date);
	// 	}
/*
The getAllCenters could possibly happen in reportsCtrl.
That way the centers can be shared between all of the controllers
on the reports page.  The reportCreatCustomCtrl and
reportAddSiteCtrl will inherit the scope from reportsCtrl and
have access to the center data.  It might make it a tad bit
cleaner.
*/
	var getAllCenters = function(){
		centerService.getAll()
			.then(function(response){
				$scope.centers = response.data;
				console.log($scope.centers);
			})
	}

	getAllCenters();

	$scope.addNewSiteReport = function(newReport){
		console.log($scope.newReport);
		reportService.create($scope.newReport).then(function(data){
			console.log(data);
			$scope.newReport = "";
		})
	}
	
	/*
	When creating a new report, the for which the report
	is being created needs to be sent along with the report.
	See reportService for the model.
	*/


});