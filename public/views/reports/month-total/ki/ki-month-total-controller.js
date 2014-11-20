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
				referral_member: 0,
				referral_inbound: 0,
				other_lessons: 0,
				referral_totals: 0
			},
			lastYear: {
				baptismal_date: 0,
				baptized: 0,
				member_present_lessons: 0,
				new_investigators: 0,
				referral_member: 0,
				referral_inbound: 0,
				other_lessons: 0,
				referral_totals: 0
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
					referral_inbound: $scope.thisYearReports[i]['Indicators.referral_inbound'],
					referral_member: $scope.thisYearReports[i]['Indicators.referral_member'],
					baptismal_date: $scope.thisYearReports[i]['Indicators.baptismal_date'],
					baptized: $scope.thisYearReports[i]['Indicators.baptized'],
					member_present_lessons: $scope.thisYearReports[i]['Indicators.member_present_lessons']
				}
			};
				$scope.totals.thisYear.baptismal_date += $scope.thisYearReports[i]['Indicators.baptismal_date']; //Adding to grand total for this year
				$scope.totals.thisYear.baptized += $scope.thisYearReports[i]['Indicators.baptized'];
				$scope.totals.thisYear.member_present_lessons += $scope.thisYearReports[i]['Indicators.member_present_lessons'];
				$scope.totals.thisYear.referral_member += $scope.thisYearReports[i]['Indicators.referral_member'];
				$scope.totals.thisYear.referral_inbound += $scope.thisYearReports[i]['Indicators.referral_inbound'];
				$scope.totals.thisYear.other_lessons += $scope.thisYearReports[i]['Indicators.other_lessons'];
				$scope.totals.thisYear.new_investigators += $scope.thisYearReports[i]['Indicators.new_investigators'];
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
					referral_inbound: $scope.lastYearReports[i]['Indicators.referral_inbound'],
					referral_member: $scope.lastYearReports[i]['Indicators.referral_member'],
					baptismal_date: $scope.lastYearReports[i]['Indicators.baptismal_date'],
					baptized: $scope.lastYearReports[i]['Indicators.baptized'],
					member_present_lessons: $scope.lastYearReports[i]['Indicators.member_present_lessons']
				}
				$scope.totals.lastYear.baptismal_date += $scope.lastYearReports[i]['Indicators.baptismal_date']; //Adding to grandtotal for this year.
				$scope.totals.lastYear.baptized += $scope.lastYearReports[i]['Indicators.baptized'];
				$scope.totals.lastYear.member_present_lessons += $scope.lastYearReports[i]['Indicators.member_present_lessons'];
				$scope.totals.lastYear.referral_member += $scope.lastYearReports[i]['Indicators.referral_member'];
				$scope.totals.lastYear.referral_inbound += $scope.lastYearReports[i]['Indicators.referral_inbound'];
				$scope.totals.lastYear.other_lessons += $scope.lastYearReports[i]['Indicators.other_lessons'];
				$scope.totals.lastYear.new_investigators += $scope.lastYearReports[i]['Indicators.new_investigators'];
			};
			$scope.totals.change = {
				baptismal_date: Math.round(($scope.totals.thisYear.baptismal_date - $scope.totals.lastYear.baptismal_date) / $scope.totals.thisYear.baptismal_date * 100),
				baptized: Math.round(($scope.totals.thisYear.baptized - $scope.totals.lastYear.baptized) / $scope.totals.thisYear.baptized * 100),
				member_present_lessons: Math.round(($scope.totals.thisYear.member_present_lessons - $scope.totals.lastYear.member_present_lessons) / $scope.totals.thisYear.member_present_lessons * 100),
				referral_member: Math.round(($scope.totals.thisYear.referral_member - $scope.totals.lastYear.referral_member) / $scope.totals.thisYear.referral_member * 100),
				referral_inbound: Math.round(($scope.totals.thisYear.referral_inbound - $scope.totals.lastYear.referral_inbound) / $scope.totals.thisYear.referral_inbound * 100),
				other_lessons: Math.round(($scope.totals.thisYear.other_lessons - $scope.totals.lastYear.other_lessons) / $scope.totals.thisYear.other_lessons * 100),
				new_investigators: Math.round(($scope.totals.thisYear.new_investigators - $scope.totals.lastYear.new_investigators) / $scope.totals.thisYear.new_investigators * 100)
			}
			console.log($scope.totals);
		})
	})


	$scope.addTo = function(data, year, key){
		console.log(data, year, key)
		$scope.totals[year][key] += data;
	}
};