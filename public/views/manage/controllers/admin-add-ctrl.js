var app = angular.module('lds-report');

app.controller('adminAddCtrl', function($scope, userService, nzSwal ){

$scope.admin = "";
$scope.createAdmin = function(admin){
	$scope.error = "";
	admin.role = "ADMIN";
	userService.create(admin).then(function(res){
		if(res.data.message){
			swal("Oops!", "Admin was not saved!", "error")
		} else {
			$scope.admin = '';
			$scope.getAllUsers()
				.then(function(data){
					$scope.administrators = data.administrators;
					nzSwal("Success!", "Admin profile has been created!", "success");
				})
			
			}
	})
}

});