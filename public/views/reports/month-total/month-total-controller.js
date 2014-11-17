angular.module('lds-report')
	.controller('monthTotalCtrl', monthTotalCtrl);

function monthTotalCtrl($scope, $routeParams, reportService){
	var splitDate = $routeParams.month.split('-');
	$scope.date = new Date(splitDate[0], splitDate[1] - 1);
	$scope.lastYear = new Date(splitDate[0]-1, splitDate[1]-1)
	reportService.getAllBy($routeParams.month).then(function(data){
		$scope.reports = data.data;
		console.log($scope.reports)
	})
	var lastYear = $routeParams.month.split('-');
	lastYear[0] -= 1;
	lastYear = lastYear.join('-');
	console.log(lastYear);
	reportService.getAllBy(lastYear).then(function(data){
		console.log(data);
	})
}