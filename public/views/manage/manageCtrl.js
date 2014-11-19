var app = angular.module('lds-report');

app.controller('manageCtrl', function($scope, centerService, userService, nzSwal){

var allCenters = function(){
	centerService.getAll().
	then(function(centers){
		$scope.centers = centers.data
	})
}

allCenters();

var administrators = [];
var directors = [];

$scope.getAllUsers = function(){
	console.log("got here");
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
  })
}



$scope.getAllUsers();

$scope.test = function(director){
 	console.log(director);
}

});


