var app = angular.module('lds-report');

app.controller('reportViewCtrl', function($scope, reportService, centerService){

	$scope.deleteReportWarning = false;
	
	$scope.center = $scope.$parent.selectedCenter; 
	$scope.month = $scope.$parent.selectedMonth;
	$scope.year = $scope.$parent.selectedYear;

	// var getCenterReport = function(center, date){
	// 	reportService.getOneBy($scope.center, $scope.date)
	// }

	// getCenterReport($scope.center, $scope.date);

	$scope.deleteReportAlert = function(){
		$scope.deleteReportWarning = !$scope.deleteReportWarning;
	}

	// $scope.deleteReport = function(id){
	// 	reportService.delete(id)
	// }
});