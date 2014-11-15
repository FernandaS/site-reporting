var app = angular.module('lds-report');

app.controller('adminAddCtrl', function($scope, userService){

$scope.admin = "";
$scope.createAdmin = function(admin){
	$scope.error = "";
	admin.role = "ADMIN";
	userService.create(admin).then(function(res){
		console.log(res)
		if(res.data.message){
			$scope.error = res.data.message;
		} else {
			$scope.admin = '';
		}
	})
}

});