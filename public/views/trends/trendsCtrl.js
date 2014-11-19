var app = angular.module('lds-report');

app.controller('trendsCtrl', function($scope, reportService, centerService){

	$scope.years = [2011, 2012, 2013, 2014];
	$scope.months = {
	1: {
		name:'January',
		number: 1
	},
	2: {
		name: 'February',
		number: 2
	}, 
	3: {
		name: 'March',
		number: 3
	},
	4: {
		name: 'April',
		number: 4
	},
	5: {
		name: 'May',
		number: 5
	},
	6: {
		name: 'June',
		number: 6
	},
	7: {
		name: 'July',
		number: 7
	},
	8: {
		name: 'August',
		number: 8
	},
	9: {
		name: 'September',
		number: 9
	},
	10: {
		name: 'October',
		number: 10
	},
	11: {
		name: 'November',
		number: 11
	},
	12: {
		name: 'December',
		number: 12
	}}
	var date = new Date();
	$scope.year = date.getFullYear();
	$scope.month = date.getMonth() + 1;
	$scope.lastYear = date.getFullYear() - 1;
	$scope.lastMonth = date.getMonth() + 1;	
	console.log($scope.month)
	$scope.test = function(month){
		console.log($scope.dates);
	}


	$scope.dates = {
		to: {
			month: Number($scope.month),
			year: $scope.year,
			setMonth: function(newMonth){
				this.month = Number(newMonth)
				console.log(this)
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
				console.log(this)
			},
			setYear: function(newYear){
				this.year = Number(newYear)
			}
		}
	}
	console.log($scope.dates);
	$scope.selectedCenters = [];
	$scope.updateCenters= function(centers){
		if($scope.selectedCenters.indexOf(centers) !== -1){
			$scope.selectedCenters.splice($scope.selectedCenters.indexOf(centers), 1);
		} else {
			$scope.selectedCenters.push(centers);
		}
		$scope.displayCenters($scope.selectedCenters);
	}

	$scope.metrics = 'visitor_total';
	$scope.updateMetrics = function(metrics) {
		$scope.metrics = metrics;
		$scope.generateChart()
	}

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
	$scope.generateChart = function generateChart(){
		var dates = $scope.dates;
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
		var params = $scope.metrics;
		var centers = $scope.selectedCenters;
		to = to.join('-');
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