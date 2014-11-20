var app = angular.module('lds-report');

app.controller('siteAddCtrl', submitReportCtrl)

function submitReportCtrl($scope, centerService, userService){
	$scope.center = '';
	$scope.yes = 'YES';
	$scope.no = 'NO';
	$scope.center = {};
	$scope.center.active = 'YES';
	$scope.test = 'Thisis a test.....'
	


$scope.submitCenter = function(){
	centerService.create($scope.center)
	.then(function(res){
		if (res.data.message){
			swal("Oops!", "Center was not saved!", "error")
		} else {
			$scope.center = '';
			$scope.allCenters()
			swal("Success!", "Your center has been created!", "success");				
		}
	})
}

};




