var app = angular.module('lds-report');

app.controller('adminEditCtrl', function($scope, userService, nzSwal){


$scope.deleteAdmin = function(){
		nzSwal({  
			title : "Are you sure?",   
			text: "This action cannot be undone!",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#DD6B55",   
			confirmButtonText: "Yes, delete it!",   
			closeOnConfirm: false 
		})
		 .then(function(){ 
		 	userService.delete($scope.admin.id)
		 	.then(function(){
		 		for(var i = 0; i < $scope.administrators.length; i++){
		 			if($scope.administrators[i].id === $scope.admin.id){
		 				$scope.administrators.splice(i, 1);
		 				break;
		 			}
		 		}
		 		$scope.getAllUsers()
		 		.then(function(data){
		 			$scope.administrators = data.administrators
		 		})
		 	})  
		 	nzSwal("Deleted!", "Admin has been deleted.", "success"); 
		 	$scope.admin.email = '';
		 	$scope.admin.username = '';


		 	
		})
		 .catch(function(){
		 	nzSwal('Cancelled');
		})

		
}




$scope.editAdmin = function(){
	userService.edit($scope.admin.id, $scope.admin)
	.then(function(res){
		console.log(res);
	if(res.data.message){
			swal("Oops!", "Changes was not saved!", "error")
		} else {
			swal("Success!", "Admin profile has been modified!", "success")

		}

	})
}



});