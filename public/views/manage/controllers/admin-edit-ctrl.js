var app = angular.module('lds-report');

app.controller('adminEditCtrl', function($scope,userService){

// var getAllAdmin = function(){
// 	userService.getAll()
// 	.then(function(response){
// 		$scope.administrators = response.data;
// 	})
// }	

// getAllAdmin();

$scope.deleteAdmin = function(){
	userService.delete()
}

$scope.editAdmin = function(){
	userService.edit()
}

});