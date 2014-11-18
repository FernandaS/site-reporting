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

$scope.addDirectorEmail = function(email){
	console.log($scope.director)
	var obj = {
		email: email
	}
	$scope.director.secondaryEmails.push(obj)
	userService.edit($scope.director.id, $scope.director)
	.then(function(res){
		console.log(res);

	})


}

$scope.removeEmail = function(){

}




});