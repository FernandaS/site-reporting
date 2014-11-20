var app = angular.module('lds-report');

app.controller('reportViewCtrl', function($scope, reportService, centerService){

	$scope.deleteReportWarningAlert = false; 

	$scope.deleteReportAlert = function(){
		$scope.deleteReportWarning = !$scope.deleteReportWarning;
	}

	// Refreshes page when modal closes

	$scope.refreshModalClose = function(){
		centerService.getAll()
		.then(function(response){
			$scope.centers = response.data;
			$scope.deleteReportWarningAlert = false;
			$scope.visitor_total = "";
			$scope.visitor_tour = "",
			$scope.visitor_tournonmember = "",
			$scope.referral_cards = "",
			$scope.referral_called = "",
			$scope.referral_inbound = "",
			$scope.referral_member = "",
			$scope.comments = ""
			$scope.selectedYear = " ";
			$scope.selectedMonth = " ";
			$scope.selectedCenter = "";	
		})
	}

	$scope.deleteReportWarning = function(){
		$scope.deleteReportWarningAlert = !$scope.deleteReportWarningAlert;
	}

	$scope.deleteSingleReport = function(id){
		reportService.delete(id)

//does not refresh upon delete		
			// .then(function(response){
			// 	reportService.getAllBy(modifiedDate)
			// 		.then(function(response){
			// 			$scope.reportsByMonth = response.data;
			// 			console.log($scope.reportsByMonth);
			// 		})

			// 	reportService.getAllKiBy(modifiedDate)
			// 		.then(function(response){
			// 			$scope.reportsKiByMonth = response.data;
			// 			console.log($scope.reportsKiByMonth);
			// 		})
			// $scope.visitor_total = "";
			// $scope.visitor_tour = "",
			// $scope.visitor_tournonmember = "",
			// $scope.referral_cards = "",
			// $scope.referral_called = "",
			// $scope.referral_inbound = "",
			// $scope.referral_member = "",
			// $scope.comments = ""
			// $scope.selectedYear = " ";
			// $scope.selectedMonth = " ";
			// $scope.selectedCenter = "";		

		$scope.deleteReportWarningAlert = false;
	}

});