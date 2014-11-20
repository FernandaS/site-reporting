var app = angular.module('lds-report');

app.controller('reportsCtrl', function($scope, reportService, centerService){
	$scope.reports = [];
	
	$scope.years = [2011, 2012, 2013, 2014, 2015];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	var date = new Date();
	$scope.year = date.getFullYear();
	$scope.month = date.getMonth();
	$scope.updateSelectDate = function(){
		$scope.reportDate = $scope.selectedMonth + ' 1, ' + $scope.selectedYear
	}
	
	var getAllCenters = function(){
		centerService.getAll()
			.then(function(response){
				$scope.centers = response.data;
				console.log($scope.centers);
			})
	}

	getAllCenters();

	$scope.getReportsByMonth = function(){
		for(var i = 0; i < $scope.months.length; i++){
			if($scope.months[i] === $scope.selectedMonth){
				var newMonth = i + 1;
				var modifiedDate = $scope.selectedYear + "-" + newMonth + "-01";
				reportService.getAllBy(modifiedDate)
					.then(function(response){
						$scope.reportsByMonth = response.data;
						console.log($scope.reportsByMonth);
					});
			}					
		}
	}	 

	$scope.viewSingleReport = function(center){
		$scope.report = '';
		console.log(center);
		for (var i = 0; i < $scope.reportsByMonth.length; i++){
			if ($scope.reportsByMonth[i].id === center.id){
				$scope.report = $scope.reportsByMonth[i];
				console.log($scope.report);
			}
		}
	}

	$scope.downloadSiteStats = function(){
		reportService.downloadSiteStats();
	}
	$scope.downloadKeyIndicators = function(){
		reportService.downloadKeyIndicators();
	}
});