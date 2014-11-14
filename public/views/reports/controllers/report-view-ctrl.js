var app = angular.module('lds-report');

app.controller('reportViewCtrl', function($scope, reportService, centerService){

	$scope.deleteReportWarning = false;
	
	$scope.deleteReport = function(){
		$scope.deleteReportWarning = !$scope.deleteReportWarning;
	}
});