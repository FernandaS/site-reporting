var app = angular.module('lds-report');

app.controller('manageCtrl', function($scope, $q, centerService, userService, nzSwal){

$scope.allCenters = function(){
	centerService.getAll().
	then(function(centers){
		$scope.centers = centers.data
	})
}

$scope.allCenters();

var administrators = [];
var directors = [];

$scope.getAllUsers = function(){
	administrators = [];
	directors = [];
	var deferred = $q.defer();
	userService.getAll()
	.then(function(response){
		for(var i = 0; i < response.data.length; i++){
		
		if (response.data[i].role === "ADMIN"){
			administrators.push(response.data[i]);
			$scope.administrators = administrators;
			
		  
		} else {
			directors.push(response.data[i]);
			$scope.directors = directors;

		}
		
	}
	deferred.resolve({directors: directors, administrators: administrators});
  })
	return deferred.promise;
}



$scope.getAllUsers();


});


