angular.module('lds-report')
	.controller('centerCtrl', submitReportCtrl)

function submitReportCtrl($scope, centerService){
	$scope.test = 'Thisis a test.....'
	$scope.submitCenter = function(){
		centerService.create($scope.newCenter).then(function(data){
			console.log(data);
		})
	}
}