var app = angular.module('lds-report');

app.controller('trendsCtrl', function($scope, reportService, centerService){

	var date = new Date();
	$scope.year = date.getFullYear();
	$scope.month = date.getMonth() + 1;
	$scope.lastYear = date.getFullYear() - 1;
	$scope.lastMonth = date.getMonth() + 1;	



	$scope.dates = {
		to: {
			month: Number($scope.month),
			year: $scope.year,
			setMonth: function(newMonth){
				this.month = Number(newMonth)
			},
			setYear: function(newYear){
				this.year = Number(newYear)
			}
		},
		from: {
			month: Number($scope.lastMonth),
			year: $scope.lastYear,
			setMonth: function(newMonth){
				this.month = Number(newMonth)
			},
			setYear: function(newYear){
				this.year = Number(newYear)
			}
		}
	}
	$scope.selectedCenters = [];
	$scope.updateCenters= function(centers){
		if($scope.selectedCenters.indexOf(centers) !== -1){
			$scope.selectedCenters.splice($scope.selectedCenters.indexOf(centers), 1);
		} else {
			$scope.selectedCenters.push(centers);
		}
		$scope.displayCenters($scope.selectedCenters);
	}

	$scope.type = 'site_stats';
	$scope.updateType = function(type){
		if($scope.type === 'site_stats'){
			$scope.updateMetrics('baptized');
		} else if ($scope.type === 'key_indicators'){
			$scope.updateMetrics('visitor_total');
		}
		$scope.type = type;
		$scope.generateChart();
	}

	$scope.metrics = 'visitor_total';
	$scope.updateMetrics = function(metrics) {
		$scope.metrics = metrics;
		$scope.generateChart();
	}

	centerService.getAll().then(function(data){
		$scope.centers = data.data;
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

	$scope.generateChart = function generateChart(){
		var type = $scope.type;
		var dates = $scope.dates;
		var params = $scope.metrics;
		var centers = $scope.selectedCenters;
		var from = [
		dates.from.year,
		dates.from.month,
		01
		]
		from = from.join('-');
		var to = [
		dates.to.year,
		dates.to.month,
		01
		]
		to = to.join('-');
		if($scope.type === 'site_stats'){
			reportService.getAllFrom(from, to).then(function(data){
				$scope.reportData = [];
				$scope.chartData = [];
				var reports = data.data;
				var reportArray = [];
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
					reportArray.push(toPush);
				};
				for (var i = reportArray.length - 1; i >= 0; i--) {
					reportArray[i].values.sort(compare);
				};
				$scope.reportData = reportArray;
				$scope.displayCenters(centers);
			})
		} else {
				reportService.getAllKiFrom(from, to).then(function(data){
				$scope.reportData = [];
				$scope.chartData = [];
				var reports = data.data;
				var reportArray = [];
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
					reportArray.push(toPush);
				};
				for (var i = reportArray.length - 1; i >= 0; i--) {
					reportArray[i].values.sort(compare);
				};
				$scope.reportData = reportArray;
				$scope.displayCenters(centers);
			})
		}
	}

	$scope.displayCenters = function displayCenters(centers){
		$scope.chartData = [];
		if(!centers || centers.length < 1) {
			$scope.chartData = $scope.reportData;
			return;
		}
		var toPush = [];
		for (var i = $scope.reportData.length - 1; i >= 0; i--) {
			if(centers.indexOf($scope.reportData[i].key) > -1){
				toPush.push($scope.reportData[i]);
			}
		};
		$scope.chartData = toPush;
	}

	$scope.generateChart();
});