var app = angular.module('lds-report');

app.controller('loginCtrl', function($scope, $rootScope, authService, nzSwal){
	$scope.login = function(){
		authService.login({
			username: $scope.username,
			password: $scope.password
		}).then(function(data){
			console.log(data);
			$rootScope.$broadcast('updateUser');
		}, function(err){
			if(err.status === 401){
				nzSwal("Oops!", "Password/Username is incorrect", "error")
			} else {
			console.log(err);
			}
		})
	}



});