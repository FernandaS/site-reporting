angular.module('lds-report')
	.controller('kiMonthTotalCtrl', monthTotalCtrl);

function monthTotalCtrl($scope, $routeParams, reportService){
	var splitDate = $routeParams.month.split('-');
	$scope.date = new Date(splitDate[0], splitDate[1] - 1);
	$scope.lastYear = new Date(splitDate[0]-1, splitDate[1]-1);

	reportService.getAllKiBy($routeParams.month).then(function(data){
		console.log(data);
		$scope.totals = {
			thisYear: {
				baptismal_date: 0,
				baptized: 0,
				member_present_lessons: 0,
				new_investigators: 0,
				sacrament_meeting: 0,
				progressing_investigators: 0,
				other_lessons: 0,
				rc_la: 0
			},
			lastYear: {
				baptismal_date: 0,
				baptized: 0,
				member_present_lessons: 0,
				new_investigators: 0,
				sacrament_meeting: 0,
				progressing_investigators: 0,
				other_lessons: 0,
				rc_la: 0
			}
		}
		$scope.thisYearReports = data.data;
		$scope.reports = {};
		for (var i = $scope.thisYearReports.length - 1; i >= 0; i--) {
			$scope.reports[$scope.thisYearReports[i]['center']] = { //Putting this year's report into that center's object, under the 'thisYear' key
				thisYear: {
					comments: $scope.thisYearReports[i]['Indicators.comments'],
					date: $scope.thisYearReports[i]['Indicators.date'],
					id: $scope.thisYearReports[i]['Indicators.id'],
					new_investigators: $scope.thisYearReports[i]['Indicators.new_investigators'],
					other_lessons: $scope.thisYearReports[i]['Indicators.other_lessons'],
					progressing_investigators: $scope.thisYearReports[i]['Indicators.progressing_investigators'],
					sacrament_meeting: $scope.thisYearReports[i]['Indicators.sacrament_meeting'],
					baptismal_date: $scope.thisYearReports[i]['Indicators.baptismal_date'],
					baptized: $scope.thisYearReports[i]['Indicators.baptized'],
					member_present_lessons: $scope.thisYearReports[i]['Indicators.member_present_lessons'],
					rc_la: $scope.thisYearReports[i]['Indicators.rc_la']
				}
			};
				$scope.totals.thisYear.baptismal_date += $scope.thisYearReports[i]['Indicators.baptismal_date']; //Adding to grand total for this year
				$scope.totals.thisYear.baptized += $scope.thisYearReports[i]['Indicators.baptized'];
				$scope.totals.thisYear.member_present_lessons += $scope.thisYearReports[i]['Indicators.member_present_lessons'];
				$scope.totals.thisYear.sacrament_meeting += $scope.thisYearReports[i]['Indicators.sacrament_meeting'];
				$scope.totals.thisYear.progressing_investigators += $scope.thisYearReports[i]['Indicators.progressing_investigators'];
				$scope.totals.thisYear.other_lessons += $scope.thisYearReports[i]['Indicators.other_lessons'];
				$scope.totals.thisYear.new_investigators += $scope.thisYearReports[i]['Indicators.new_investigators'];
				$scope.totals.thisYear.rc_la += $scope.thisYearReports[i]['Indicators.rc_la'];
		};
		var lastYear = $routeParams.month.split('-');
		lastYear[0] -= 1;
		lastYear = lastYear.join('-');
		reportService.getAllBy(lastYear).then(function(data){
			$scope.lastYearReports = data.data;
			for (var i = $scope.lastYearReports.length - 1; i >= 0; i--) {
				$scope.reports[$scope.lastYearReports[i]['center']].lastYear = { //Putting last year's report into that center's object, under the 'lastYear' key
					comments: $scope.lastYearReports[i]['Indicators.comments'],
					date: $scope.lastYearReports[i]['Indicators.date'],
					id: $scope.lastYearReports[i]['Indicators.id'],
					new_investigators: $scope.lastYearReports[i]['Indicators.new_investigators'],
					other_lessons: $scope.lastYearReports[i]['Indicators.other_lessons'],
					progressing_investigators: $scope.lastYearReports[i]['Indicators.progressing_investigators'],
					sacrament_meeting: $scope.lastYearReports[i]['Indicators.sacrament_meeting'],
					baptismal_date: $scope.lastYearReports[i]['Indicators.baptismal_date'],
					baptized: $scope.lastYearReports[i]['Indicators.baptized'],
					member_present_lessons: $scope.lastYearReports[i]['Indicators.member_present_lessons'],
					rc_la: $scope.lastYearReports[i]['Indicators.rc_la']
				}
				$scope.totals.lastYear.baptismal_date += $scope.lastYearReports[i]['Indicators.baptismal_date']; //Adding to grandtotal for this year.
				$scope.totals.lastYear.baptized += $scope.lastYearReports[i]['Indicators.baptized'];
				$scope.totals.lastYear.member_present_lessons += $scope.lastYearReports[i]['Indicators.member_present_lessons'];
				$scope.totals.lastYear.sacrament_meeting += $scope.lastYearReports[i]['Indicators.sacrament_meeting'];
				$scope.totals.lastYear.progressing_investigators += $scope.lastYearReports[i]['Indicators.progressing_investigators'];
				$scope.totals.lastYear.other_lessons += $scope.lastYearReports[i]['Indicators.other_lessons'];
				$scope.totals.lastYear.new_investigators += $scope.lastYearReports[i]['Indicators.new_investigators'];
				$scope.totals.lastYear.rc_la += $scope.lastYearReports[i]['Indicators.rc_la'];
			};
			console.log($scope.reports);
			$scope.totals.change = {
				baptismal_date: Math.round(($scope.totals.thisYear.baptismal_date - $scope.totals.lastYear.baptismal_date) / $scope.totals.thisYear.baptismal_date * 100),
				baptized: Math.round(($scope.totals.thisYear.baptized - $scope.totals.lastYear.baptized) / $scope.totals.thisYear.baptized * 100),
				member_present_lessons: Math.round(($scope.totals.thisYear.member_present_lessons - $scope.totals.lastYear.member_present_lessons) / $scope.totals.thisYear.member_present_lessons * 100),
				sacrament_meeting: Math.round(($scope.totals.thisYear.sacrament_meeting - $scope.totals.lastYear.sacrament_meeting) / $scope.totals.thisYear.sacrament_meeting * 100),
				progressing_investigators: Math.round(($scope.totals.thisYear.progressing_investigators - $scope.totals.lastYear.progressing_investigators) / $scope.totals.thisYear.progressing_investigators * 100),
				other_lessons: Math.round(($scope.totals.thisYear.other_lessons - $scope.totals.lastYear.other_lessons) / $scope.totals.thisYear.other_lessons * 100),
				new_investigators: Math.round(($scope.totals.thisYear.new_investigators - $scope.totals.lastYear.new_investigators) / $scope.totals.thisYear.new_investigators * 100),
				rc_la: Math.round(($scope.totals.thisYear.rc_la - $scope.totals.lastYear.rc_la) / $scope.totals.thisYear.rc_la * 100)
			}
			console.log($scope.totals);
		})
	})


	$scope.addTo = function(data, year, key){
		console.log(data, year, key)
		$scope.totals[year][key] += data;
	}
};