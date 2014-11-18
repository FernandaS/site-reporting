angular.module('lds-report')
	.controller('mainCtrl', mainCtrl);

function mainCtrl($scope, $location, authService){
	function updateUser(){
		authService.getCurrentUser().then(function(data){
			$scope.user = data.data;
			console.log($scope.user);
		})
	}
	updateUser();
	$scope.$on('$routeChangeStart', function(next, current) {
		$scope.currentPath = $location.path();
		console.log($scope.currentPath);
	 });
}