var app = angular.module('lds-report');

app.controller('reportsCtrl', function($scope, $timeout, reportService, centerService){
	$scope.reports = [];
	
	$scope.years = [2011, 2012, 2013, 2014, 2015];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	var date = new Date();
	$scope.selectedYear = date.getFullYear();
	$scope.month = date.getMonth();
	$scope.updateSelectDate = function(){
		$scope.reportDate = $scope.selectedMonth + ' 1, ' + $scope.selectedYear
		var date = $scope.reportDate.split(',').join('').split(' ');
		date[1] = $scope.months.indexOf(date[0]) + 1;
		date[0] = date[2];
		date[2] = 01;
		$scope.reportDate = date.join('-');
	}
	
	var getAllCenters = function(){
		centerService.getAll()
		.then(function(response){
			$scope.centers = response.data;
		})
	}

	getAllCenters();
	
	//Gets Stats and Key Indicator reports for month
	$scope.getReportsByMonth = function(){
		for(var i = 0; i < $scope.months.length; i++){
			if($scope.months[i] === $scope.selectedMonth){
				var newMonth = i + 1;
				var modifiedDate = $scope.selectedYear + "-" + newMonth + "-01";
				reportService.getAllBy(modifiedDate)
				.then(function(response){
					$scope.reportsByMonth = response.data;
					console.log($scope.reportsByMonth);
				})

				reportService.getAllKiBy(modifiedDate)
				.then(function(response){
					$scope.reportsKiByMonth = response.data;
					console.log($scope.reportsKiByMonth);
				})	
			}					
		}
	}	 

	//Displays single stats report
	$scope.viewSingleReport = function(center){
		$scope.report = '';
		for (var i = 0; i < $scope.reportsByMonth.length; i++){
			if ($scope.reportsByMonth[i].id === center.id){
				$scope.report = $scope.reportsByMonth[i];
				console.log($scope.report);
			}
		}
	}

	//Displays single key indicator report

	$scope.viewSingleKiReport = function(center){
		$scope.reportKi = '';
		console.log(center);
		for (var i = 0; i < $scope.reportsKiByMonth.length; i++){
			if ($scope.reportsKiByMonth[i].id === center.id){
				$scope.reportKi = $scope.reportsKiByMonth[i];
				console.log($scope.reportKi);
			}
		}
	}	
	$scope.updateSelectDate()
});