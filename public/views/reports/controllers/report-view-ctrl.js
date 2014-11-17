var app = angular.module('lds-report');

app.controller('reportViewCtrl', function($scope, reportService, centerService){

	$scope.deleteReportWarning = false; 

	$scope.deleteReportAlert = function(){
		$scope.deleteReportWarning = !$scope.deleteReportWarning;
	}

	// Refreshes page when modal closes

	$scope.refreshModalClose = function(){
		centerService.getAll()
			.then(function(response){
				$scope.centers = response.data;
				console.log($scope.centers);
			})
	}

});