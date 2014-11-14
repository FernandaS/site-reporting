var app = angular.module('lds-report');

app.controller('siteAddCtrl', submitReportCtrl)

function submitReportCtrl($scope, centerService){
	$scope.yes = 'YES';
	$scope.no = 'NO';
	$scope.newCenter = {};
	$scope.newCenter.active = 'YES';
	$scope.test = 'Thisis a test.....'
	$scope.submitCenter = function(){
		centerService.create($scope.newCenter).then(function(data){
			console.log(data);
		})
		// console.log($scope.newCenter)
	}
}