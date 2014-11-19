var app = angular.module('lds-report');

app.controller('directorAddCtrl', function($scope, userService, nzSwal){

$scope.createDirector = function(director){
	$scope.error = '';
	director.role = "DIRECTOR";
	userService.create(director).then(function(res){
		console.log(res);
		if(res.data.message){
			$scope.error = res.data.message;
		} else {
			swal("Success!", "Director profile has been created!", "success");
			$scope.director = '';
		}
	})
}

});







