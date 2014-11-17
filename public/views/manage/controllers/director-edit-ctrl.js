var app = angular.module('lds-report');

app.controller('directorEditCtrl', function($scope, userService){




$scope.deleteDirector = function(){
	userService.delete($scope.director.id)
	.then(function(res){
		console.log(res);

	})
}

$scope.editDirector = function(){
	userService.edit($scope.director.id, $scope.director)
	.then(function(res){
		console.log(res);

	})
}

// $scope.addDirectorEmail = function(){
	
// }

});