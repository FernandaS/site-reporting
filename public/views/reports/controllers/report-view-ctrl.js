var app = angular.module('lds-report');

app.controller('reportViewCtrl', function($scope, reportService, centerService){

	$scope.deleteReportWarningAlert = false; 

	$scope.deleteReportAlert = function(){
		$scope.deleteReportWarning = !$scope.deleteReportWarning;
	}

	// Refreshes page when modal closes

	$scope.refreshModalClose = function(){
		centerService.getAll()
		.then(function(response){
			$scope.centers = response.data;
			$scope.deleteReportWarningAlert = false;
			console.log($scope.centers);
		})
	}

	$scope.deleteReportWarning = function(){
		$scope.deleteReportWarningAlert = !$scope.deleteReportWarningAlert;
	}

	$scope.deleteSingleReport = function(id){
		reportService.delete(id)
		console.log('Deleted');
	}

});