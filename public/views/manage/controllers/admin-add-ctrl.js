var app = angular.module('lds-report');

app.controller('adminAddCtrl', function($scope, userService, nzSwal ){

$scope.admin = "";
$scope.createAdmin = function(admin){
	$scope.error = "";
	admin.role = "ADMIN";
	userService.create(admin).then(function(res){
		if(res.data.message){
			$scope.error = res.data.message;
		} else {
			swal("Success!", "Admin profile has been created!", "success");
			$scope.admin = '';
		}
	})
}

});