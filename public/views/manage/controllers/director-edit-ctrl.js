var app = angular.module('lds-report');

app.controller('directorEditCtrl', function($scope, userService, nzSwal){




$scope.deleteDirector = function(){
		nzSwal({  
			title : "Are you sure?",   
			text: "This action cannot be undone!",   
			type: "warning",   showCancelButton: true,   
			confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   
			closeOnConfirm: false 
		})
		 .then(function(){   
		 	nzSwal("Deleted!", "Director has been deleted.", "success"); 
		 	userService.delete($scope.director.id);
		})
		 .catch(function(){
		 	nzSwal('Cancelled');
		})

		
}


$scope.editDirector = function(){
	userService.edit($scope.director.id, $scope.director)
	.then(function(res){
		if(res.data.message){
			$scope.error = res.data.message;
		} else {
			swal("Success!", "Director profile has been modified!", "success")

		}

	})
}

$scope.addDirectorEmail = function(){
	console.log($scope.newEmail);
	userService.createEmail($scope.newEmail, $scope.director.id)
	.then(function(res){
	 $scope.$parent.getAllUsers();
	})
}

$scope.removeEmail = function(email){
	userService.deleteEmail(email.id)
	.then(function(res){
		if(res.data.message){
			$scope.error = res.data.message;
		} else {

			nzSwal("You have successfully Deleted!", "success")
			$scope.diretor = ''
		}
		console.log(res);
	})

}







});