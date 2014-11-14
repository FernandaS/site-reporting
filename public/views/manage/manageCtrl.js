var app = angular.module('lds-report');

app.controller('manageCtrl', function($scope, centerService){

var allCenters = function(){
	centerService.getAll().
	then(function(centers){
		$scope.centers = centers.data
	})
}

allCenters();

});