var app = angular.module('lds-report');

app.controller('siteAddCtrl', submitReportCtrl)

function submitReportCtrl($scope, centerService, userService){
	$scope.yes = 'YES';
	$scope.no = 'NO';
	$scope.center = {};
	$scope.center.active = 'YES';
	$scope.test = 'Thisis a test.....'
	


$scope.submitCenter = function(){
	console.log($scope.center);
	centerService.create($scope.center)
	.then(function(res){
		if (res.data.message){
			$scope.error = res.data.message;
		} else {
			swal("Success!", "Your center has been created!", "success");
			$scope.center = '';
		}
	})
}

	

};




