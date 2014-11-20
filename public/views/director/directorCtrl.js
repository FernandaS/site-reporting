var app = angular.module('lds-report');

app.controller('directorCtrl', function($scope, reportService, centerService){

	$scope.years = [2011, 2012, 2013, 2014, 2015];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	// //gets all center reports on page load

	// var getAllReports = function(){
	// 	reportService.//////getAllReportsForCenter()/////
	// 		.then(function(response){
	// 			$scope.reports = response.data;
	// 		})
		// reportService.//////getAllKiReportsForCenter()/////
		// 	.then(function(response){
		// 		$scope.reportsKi = response.data;
		// 	})
	// }

	// getAllReports();

	// //individual report info displayed in modal 

	// $scope.getReportByMonth = function(){
	// 	for(var i = 0; i < $scope.months.length; i++){
	// 		if($scope.months[i] === $scope.selectedMonth){
	// 			var newMonth = i + 1;
	// 			var modifiedDate = $scope.selectedYear + "-" + newMonth + "-01";
	// 			for(var i = 0; i < $scope.reports.length; i++){
	// 				if ($scope.reports[i].Reports.date === modifiedDate){
	// 					$scope.report = $scope.reports[i];
	// 				}
	// 			}
	// 			for(var i = 0; i < $scope.reportsKi.length; i++){
	// 				if ($scope.reportsKi[i].Reports.date === modifiedDate){
	// 					$scope.reportKi = $scope.reportsKi[i];
	// 				}
	// 			}	
	// 		}
	// 	}
	// }	
});


