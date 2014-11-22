var app = angular.module('lds-report');

app.controller('directorCtrl', function($scope, reportService, centerService){

	$scope.years = [2011, 2012, 2013, 2014, 2015];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	$scope.centers = $scope.user['centers'];
	


	//ng-change

	$scope.updateSelectCenter = function(center){
		centerService.getAllReports($scope.selectedCenter.id)
			.then(function(response){
				$scope.reports = response.data;
				console.log($scope.reports);
			})
		centerService.getAllKIReports($scope.selectedCenter.id)
			.then(function(response){
				$scope.reportsKi = response.data;
			})
	}

	//individual report info displayed in modal 

	$scope.getReportByMonth = function(){
		$scope.report = "";
		$scope.reportKi = "";
		for(var i = 0; i < $scope.months.length; i++){
			if($scope.months[i] === $scope.selectedMonth){
				var newMonth = i + 1;
				var modifiedDate = $scope.selectedYear + "-" + "0" + newMonth + "-01";
		
				for(var i = 0; i < $scope.reports.length; i++){
					if ($scope.reports[i].date === modifiedDate){
						$scope.report = $scope.reports[i];	
					}
				}
				for(var i = 0; i < $scope.reportsKi.length; i++){
					if ($scope.reportsKi[i].date === modifiedDate){
						$scope.reportKi = $scope.reportsKi[i];
					}
				}	
			}
		}
	}	
});


