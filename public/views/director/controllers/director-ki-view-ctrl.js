var app = angular.module('lds-report');

app.controller('directorKiViewCtrl', function($scope, reportService, centerService){
	
	$scope.deleteReportWarningAlert = false; 

	$scope.deleteReportAlert = function(){
		$scope.deleteReportWarningAlert = !$scope.deleteReportWarningAlert;
	}

	//Refreshes page when modal closes

	$scope.refreshModalClose = function(){
		// $scope.stats = response.data;
		$scope.deleteReportWarningAlert = false;
		$scope.baptized = "";
		$scope.baptismal_date = "",
		$scope.sacrament_meeting = "",
		$scope.member_present_lessons = "",
		$scope.other_lessons = "",
		$scope.new_investigators = "",
		$scope.progressing_investigators = "",
		$scope.rc_la = ""
		$scope.referrals_sent = " ";
	}

	$scope.deleteSingleReport = function(id){
		reportService.deleteKi(id)
			.then(function(response){
				console.log(response);
					$scope.deleteReportWarningAlert = false;
			})
	}

});