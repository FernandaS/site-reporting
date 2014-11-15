var app = angular.module('lds-report');

app.controller('manageCtrl', function($scope, centerService, userService){

// var allCenters = function(){
// 	centerService.getAll().
// 	then(function(centers){
// 		$scope.centers = centers.data
// 		console.log($scope.centers);
// 	})
// }

// allCenters();
var administrators = [];
var directors = [];

var getAllAdmin = function(){
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



getAllAdmin();

});


