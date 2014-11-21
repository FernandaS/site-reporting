var app = angular.module('lds-report');

app.controller('directorAddCtrl', function($scope, userService, nzSwal){
$scope.director = '';
$scope.createDirector = function(director){
	$scope.error = '';
	director.role = "DIRECTOR";
	userService.create(director)
		.then(function(res){
		console.log(res);
		if(res.data.message){
			nzSwal("Oops!", "Director was not saved!", "error")
		} else {
			$scope.director = '';
			$scope.getAllUsers()
				.then(function(data){
					$scope.directors = data.directors;
					nzSwal("Success!", "Director profile has been created!", "success");
				})
		}
	})
}

});







