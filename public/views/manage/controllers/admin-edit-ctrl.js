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
		 	nzSwal("Deleted!", "Admin has been deleted.", "success"); 
		 	userService.delete($scope.admin.id)
		})
		 .catch(function(){
		 	nzSwal('Cancelled');
		})

		
}




$scope.editAdmin = function(){
	userService.edit($scope.admin.id, $scope.admin)
	.then(function(res){
	if(res.data.message){
			$scope.error = res.data.message;
		} else {
			swal("Success!", "Admin profile has been modified!", "success")

		}

	})
}



});