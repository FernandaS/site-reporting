var app = angular.module('lds-report');

app.controller('reportEditCtrl', function($scope, reportService, centerService){

	$scope.center = $scope.$parent.selectedCenter; 
	$scope.month = $scope.$parent.selectedMonth;
	$scope.year = $scope.$parent.selectedYear;

	// $scope.saveEditedReport = function(id, edit){
	// 	reportService.edit($scope.id, $scope.edit){
	// 	}
	// }

});