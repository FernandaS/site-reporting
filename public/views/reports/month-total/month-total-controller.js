angular.module('lds-report')
	.controller('monthTotalCtrl', monthTotalCtrl);

function monthTotalCtrl($scope, $routeParams, reportService){

	var splitDate = $routeParams.month.split('-');
	$scope.date = new Date(splitDate[0], splitDate[1] - 1);
	$scope.lastYear = new Date(splitDate[0]-1, splitDate[1]-1);


	reportService.getAllBy($routeParams.month).then(function(data){
		$scope.thisYearReports = data.data;

		for (var i = $scope.thisYearReports.length - 1; i >= 0; i--) {
			$scope.thisYearReports[i]
		};

		var lastYear = $routeParams.month.split('-');
		lastYear[0] -= 1;
		lastYear = lastYear.join('-');
		reportService.getAllBy(lastYear).then(function(data){
			$scope.lastYearReports = data.data;
			console.log($scope.lastYearReports)
		})
	})
};