var app = angular.module('lds-report');

app.controller('loginCtrl', function($scope, $rootScope, authService){
	$scope.login = function(){
		authService.login({
			username: $scope.username,
			password: $scope.password
		}).then(function(data){
			console.log(data);
			$rootScope.$broadcast('updateUser');
		})
	}




});