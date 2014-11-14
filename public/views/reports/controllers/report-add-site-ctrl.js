var app = angular.module('lds-report');

app.controller('reportAddSiteCtrl', function($scope, reportService, centerService){

	$scope.reports = [];
	$scope.years = [2011, 2012, 2013, 2014, 2015];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	$scope.addNewSiteReport = function(newReport){
		reportService.create($scope.newReport)
	}

});