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
		 	centerService.delete($scope.center.id)
		 		.then(function(){
		 			for(var i = 0; i < $scope.centers.length; i++){
		 				if($scope.centers[i].id === $scope.center){
		 					$scope.centers.splice(i, 1)
		 					break;
		 				}
		 			}
		 			$scope.allCenters()
		 			.then(function(data){
		 					$scope.centers = data.centers
		 				})
		 		})  
		 	nzSwal("Deleted!", "Center has been deleted.", "success");
		 	$scope.center.center ="";
		 	$scope.center.active = "";

		 		
		})
		 .catch(function(){
		 	nzSwal('Cancelled');
		})

		
}

$scope.editCenter = function(){
	console.log($scope.center);
	centerService.edit($scope.center.id, $scope.center)
	.then(function(res){
		if(res.data.message){
			swal("Oops!", "Changes was not saved!", "error")
		} else {
			nzSwal("Success!", "Your center has been successfully modified!", "success")
			$scope.center.center ="";
			$scope.center.active = "";

		}
	})
}



});