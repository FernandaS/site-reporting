var app = angular.module('lds-report');

app.controller('siteEditCtrl', function($scope, centerService){

$scope.deleteCenter = function(){
	centerService.delete($scope.center.id)
	.then(function(res){
		console.log(res);
	})
}

$scope.editCenter = function(){
	centerService.edit($scope.center.id, $scope.center)
	.then(function(res){
		console.log(res);
	})
}

});