var app = angular.module('lds-report');

app.controller('reportCreateCustomCtrl', function($scope, reportService, centerService){

	$scope.reports = [];
	$scope.months = $scope.$parent.months;	
	$scope.years = $scope.$parent.years;	
	$scope.centers = [{name:'Temple Square'}];

});

