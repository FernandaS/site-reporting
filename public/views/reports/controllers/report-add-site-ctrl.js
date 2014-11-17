var app = angular.module('lds-report');

app.controller('reportAddSiteCtrl', function($scope, reportService, centerService){

	$scope.reports = [];
	$scope.centers = $scope.$parent.centers; 

/*
The getAllCenters could possibly happen in reportsCtrl.
That way the centers can be shared between all of the controllers
on the reports page.  The reportCreatCustomCtrl and
reportAddSiteCtrl will inherit the scope from reportsCtrl and
have access to the center data.  It might make it a tad bit
cleaner.
*/

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