var app = angular.module('lds-report');

app.controller('siteEditCtrl', function($scope, centerService, nzSwal){

$scope.deleteCenter = function(){
	nzSwal({  
			title : "Are you sure?",   
			text: "This action cannot be undone. If there are reports associated with this center/site, you will not be able to delete.",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#DD6B55",   
			confirmButtonText: "Yes, delete it!",   
			closeOnConfirm: false 
		})
		 .then(function(){   
		 	nzSwal("Deleted!", "Center has been deleted.", "success");centerService.delete($scope.center.id);
		 		$scope.center = '';
		})
		 .catch(function(){
		 	nzSwal('Cancelled');
		})

		
}

$scope.editCenter = function(){
	centerService.edit($scope.center.id, $scope.center)
	.then(function(res){
		if(res.data.message){
			$scope.error = res.data.message;
		} else {
			swal("Success!", "Your center has been successfully modified!", "success")

		}
	})
}



});