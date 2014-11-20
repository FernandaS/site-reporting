var app = angular.module('lds-report');

app.controller('siteAddCtrl', submitReportCtrl)

function submitReportCtrl($scope, centerService, userService){
	$scope.yes = 'YES';
	$scope.no = 'NO';
	$scope.center = {};
	$scope.center.active = 'YES';
	$scope.test = 'Thisis a test.....'
	


$scope.submitCenter = function(){
	centerService.create($scope.center)
	.then(function(res){
		if (res.data.message){
			$scope.error = res.data.message;
		} else {
			$scope.allCenters()
			swal("Success!", "Your center has been created!", "success");
	
		}
	})
}

	

};




