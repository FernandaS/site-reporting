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
		// reportService.getListBy($scope.updateSelectDate).then(function(data){
		// 	$scope.reports = data.data;
		console.log($scope.reportDate)
		// })
	}
	
	var getAllCenters = function(){
		centerService.getAll()
			.then(function(response){
				$scope.centers = response.data;
				console.log($scope.centers);
			})
	}

	getAllCenters();

	$scope.viewSingleReport = function(id){
		for(var i = 0; i < $scope.months.length; i++){
			if($scope.months[i] === $scope.selectedMonth){
				var newMonth = i;
				var date = $scope.selectedYear + "-" + newMonth + "-01";
				reportService.getOneBy(id, date)
					.then(function(response){
						$scope.report = response.data;
							console.log($scope.report);
						})
					}

			}
		}
});