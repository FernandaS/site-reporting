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
		console.log($scope.admin.id)
	userService.delete($scope.admin.id)
	.then(function(res){
		console.log(res)

	})
}

$scope.editAdmin = function(){
	console.log($scope.admin);
	userService.edit($scope.admin.id, $scope.admin)
	.then(function(res){
		//todo User feedback was the change saved successfully
	});
}

});