var app = angular.module('lds-report');

app.controller('reportAddSiteCtrl', function($scope, reportService, centerService){

	$scope.centers = $scope.$parent.centers; 

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