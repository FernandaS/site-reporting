var app = angular.module('lds-report');

app.controller('directorViewReportCtrl', function($scope, reportService, centerService){

	$scope.deleteReportWarningAlert = false; 

	$scope.deleteReportAlert = function(){
		$scope.deleteReportWarning = !$scope.deleteReportWarning;
	}

	// Refreshes page when modal closes

	$scope.refreshModalClose = function(){
		$scope.deleteReportWarningAlert = false;
		$scope.visitor_total = "";
		$scope.visitor_tour = "",
		$scope.visitor_tournonmember = "",
		$scope.referral_cards = "",
		$scope.referral_called = "",
		$scope.referral_inbound = "",
		$scope.referral_member = "",
		$scope.comments = ""
		$scope.selectedYear = "";
		$scope.selectedMonth = "";	
	}
	
	$scope.deleteReportWarning = function(){
		$scope.deleteReportWarningAlert = true;
	}

	$scope.deleteSingleReport = function(id){
		reportService.delete(id)	
		.then(function(response){
			$scope.deleteReportWarningAlert = false;
			centerService.getAllReports($scope.selectedCenter.id)
			.then(function(response){
				$scope.$parent.reports = response.data;
			})		
		})
	}
});