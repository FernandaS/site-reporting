var app = angular.module('lds-report');

app.controller('trendsCtrl', function($scope, reportService, centerService){

	$scope.years = [2011, 2012, 2013, 2014];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	var date = new Date();
	$scope.year = date.getFullYear();
	$scope.month = date.getMonth();

	var start = new Date($scope.year - 1, $scope.month);
	var end = date;
	// reportService.getAllLFrom(start, end).then(function(data){
	// 	$scope.reports = data.data;
	// })
	centerService.getAll().then(function(data){
		$scope.centers = data.data;
		console.log($scope.centers)
	})
	$scope.xAxisTickFormatFunction = function(){
		return function(d){
	      return d3.time.format('%x')(new Date(d)); //uncomment for date format
	  }
	}
	function compare(a,b) {
		if (a[0] < b[0])
			return -1;
		if (a[0] > b[0])
			return 1;
		return 0;
	}
	$scope.generateChart = function generateChart(from, to, params, centers){
		reportService.getAllFrom(from, to).then(function(data){
			$scope.reportData = [];
			var reports = data.data;
			for (var i = reports.length - 1; i >= 0; i--) {
				var toPush = {
					"key": reports[i].center,
					"values": []
				}
				for (var j = reports[i].reports.length - 1; j >= 0; j--) {
					reports[i].reports[j].date = reports[i].reports[j].date.split('-');
					reports[i].reports[j].date[2] = Number(reports[i].reports[j].date[2]);
					reports[i].reports[j].date = new Date(reports[i].reports[j].date.join('-'));      
					toPush.values.push([
						reports[i].reports[j].date,
						reports[i].reports[j][params]
						])
				};
				$scope.reportData.push(toPush);
			};
			for (var i = $scope.reportData.length - 1; i >= 0; i--) {
				$scope.reportData[i].values.sort(compare);
			};
			$scope.displayCenters(centers);
		})
	}
	$scope.displayCenters = function displayCenters(centers){
		$scope.chartData = [];
		if(!centers) {
			$scope.chartData = $scope.reportData;
			return;
		}
		for (var i = $scope.reportData.length - 1; i >= 0; i--) {
			if(centers.indexOf($scope.reportData[i].key) > -1){
				$scope.chartData.push($scope.reportData[i]);
			}
		};
	}
	$scope.generateChart('2013-01-01', '2014-12-31', 'visitor_total')
});