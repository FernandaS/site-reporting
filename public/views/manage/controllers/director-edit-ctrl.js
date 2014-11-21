var app = angular.module('lds-report');

app.controller('directorEditCtrl', function($scope, $timeout, userService, nzSwal, $route, $location){




$scope.deleteDirector = function(){
		nzSwal({  
			title : "Are you sure?",   
			text: "This action cannot be undone!",   
			type: "warning",   showCancelButton: true,   
			confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   
			closeOnConfirm: false 
		})
		 .then(function(){  
		  	userService.delete($scope.director.id)
		  	.then(function(){
		  		for(var i = 0; i < $scope.directors.length; i++){
		  			if($scope.directors[i].id ===  $scope.director.id){
		  				$scope.directors.splice(i , 1);
		  				break;
		  			}
		  		}
		  		$scope.getAllUsers()
		  		.then(function(data){
		  			$scope.directors = data.directors
		  		})
		  	})
		 	nzSwal("Deleted!", "Director has been deleted.", "success"); 
		 	$scope.director.username = '';
		 	$scope.director.email = '';
		})
		 .catch(function(){
		 	nzSwal('Cancelled');
		})

		
}


$scope.editDirector = function(){
	userService.edit($scope.director.id, $scope.director)
	.then(function(res){
		if(res.data.message){
			swal("Oops!", "Changes was not saved!", "error");
		} else {
			$scope.getAllUsers()
			.then(function(data){
				$scope.directors = data.directors;

			})
			swal("Success!", "Director profile has been modified!", "success")
		}

	})
}

$scope.addDirectorEmail = function(){
	console.log($scope.newEmail);
	userService.createEmail($scope.newEmail, $scope.director.id)
	.then(function(res){
		$scope.director.secondaryEmails.push({email: $scope.newEmail});
		$scope.getAllUsers()
			.then(function(data){
				$scope.directors = data.directors;
				$scope.administrators = data.administrators;
				$scope.newEmail = '';
			})
		// swal("Success!", "Email has been modified!", "success")
		
		
	 
	})
}

$scope.removeEmail = function(email){
	userService.deleteEmail(email.id)
	.then(function(res){
		if(res.data.message){
			$scope.error = res.data.message;
		} else {
			for(var i = 0; i < $scope.director.secondaryEmails.length; i++){
				if($scope.director.secondaryEmails[i].id === email.id){
					$scope.director.secondaryEmails.splice(i, 1);
				}
			}
			$scope.getAllUsers()
				.then(function(data){
					$scope.directors = data.directors;
					
				})
			// nzSwal("You have successfully Deleted!", "success")
			
		}
		
	})

}






});