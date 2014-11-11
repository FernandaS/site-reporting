angular.module('lds-report')
	.controller('mainCtrl', mainCtrl);

function mainCtrl($scope, authService){

	function updateUser(){
		authService.getCurrentUser().then(function(data){
			$scope.user = data.data;
			console.log($scope.user);
		})
	}
	
	updateUser();
}