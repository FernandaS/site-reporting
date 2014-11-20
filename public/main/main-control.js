angular.module('lds-report')
	.controller('mainCtrl', mainCtrl);

function mainCtrl($scope, $location, authService){
	$scope.admin = false;
	function updateUser(){
		authService.getCurrentUser().then(function(data){
			$scope.user = data.data;
			console.log($scope.user);
			if($scope.user.role === 'ADMIN'){
				$scope.admin = true;
				$location.url('/reports');
			} else if($scope.user.role === 'DIRECTOR'){
				$location.url('/director');
			} else if (!$scope.user){
				$location.url('/login');
			}
		})
	}
	// updateUser();
	$scope.$on('updateUser', updateUser);
	$scope.$on('$routeChangeStart', function(next, current) {
		var path = $location.path().split('/')
		if((path.indexOf('reports') !== -1 && path.indexOf('site') !== -1) || (path.indexOf('reports') !== -1 && path.indexOf('key_indicators') !== -1)){
			$scope.path = 'downloads';
		} else {
			$scope.path = 'normal';
		}
	 });

	$scope.logout = function() {
		authService.logout().then(function(data){
			console.log(data);
			updateUser();
		});
	}
}