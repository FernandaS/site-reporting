angular.module('lds-report')
	.controller('monthTotalCtrl', monthTotalCtrl);

function monthTotalCtrl($scope, $routeParams, reportService){

	var splitDate = $routeParams.month.split('-');
	$scope.date = new Date(splitDate[0], splitDate[1] - 1);
	$scope.lastYear = new Date(splitDate[0]-1, splitDate[1]-1);

	reportService.getAllBy($routeParams.month).then(function(data){
		$scope.totals = {
			thisYear: {
				visitor_total: 0,
				visitor_tour: 0,
				visitor_tournonmember: 0,
				referral_called: 0,
				referral_member: 0,
				referral_inbound: 0,
				referral_cards: 0,
				referral_totals: 0
			},
			lastYear: {
				visitor_total: 0,
				visitor_tour: 0,
				visitor_tournonmember: 0,
				referral_called: 0,
				referral_member: 0,
				referral_inbound: 0,
				referral_cards: 0,
				referral_totals: 0
			}
		}
		$scope.thisYearReports = data.data;
		console.log($scope.thisYearReports);
		$scope.reports = {};
		for (var i = $scope.thisYearReports.length - 1; i >= 0; i--) {
			$scope.reports[$scope.thisYearReports[i]['center']] = {
				thisYear: {
					comments: $scope.thisYearReports[i]['Reports.comments'],
					date: $scope.thisYearReports[i]['Reports.date'],
					id: $scope.thisYearReports[i]['Reports.id'],
					referral_called: $scope.thisYearReports[i]['Reports.referral_called'],
					referral_cards: $scope.thisYearReports[i]['Reports.referral_cards'],
					referral_inbound: $scope.thisYearReports[i]['Reports.referral_inbound'],
					referral_member: $scope.thisYearReports[i]['Reports.referral_member'],
					visitor_total: $scope.thisYearReports[i]['Reports.visitor_total'],
					visitor_tour: $scope.thisYearReports[i]['Reports.visitor_tour'],
					visitor_tournonmember: $scope.thisYearReports[i]['Reports.visitor_tournonmember']
				}
			};
				$scope.totals.thisYear.visitor_total += $scope.thisYearReports[i]['Reports.visitor_total'];
				$scope.totals.thisYear.visitor_tour += $scope.thisYearReports[i]['Reports.visitor_tour'];
				$scope.totals.thisYear.visitor_tournonmember += $scope.thisYearReports[i]['Reports.visitor_tournonmember'];
				$scope.totals.thisYear.referral_member += $scope.thisYearReports[i]['Reports.referral_member'];
				$scope.totals.thisYear.referral_inbound += $scope.thisYearReports[i]['Reports.referral_inbound'];
				$scope.totals.thisYear.referral_cards += $scope.thisYearReports[i]['Reports.referral_cards'];
				$scope.totals.thisYear.referral_called += $scope.thisYearReports[i]['Reports.referral_called'];
		};
		var lastYear = $routeParams.month.split('-');
		lastYear[0] -= 1;
		lastYear = lastYear.join('-');
		reportService.getAllBy(lastYear).then(function(data){
			$scope.lastYearReports = data.data;
			for (var i = $scope.lastYearReports.length - 1; i >= 0; i--) {
				$scope.reports[$scope.lastYearReports[i]['center']].lastYear = {
					comments: $scope.lastYearReports[i]['Reports.comments'],
					date: $scope.lastYearReports[i]['Reports.date'],
					id: $scope.lastYearReports[i]['Reports.id'],
					referral_called: $scope.lastYearReports[i]['Reports.referral_called'],
					referral_cards: $scope.lastYearReports[i]['Reports.referral_cards'],
					referral_inbound: $scope.lastYearReports[i]['Reports.referral_inbound'],
					referral_member: $scope.lastYearReports[i]['Reports.referral_member'],
					visitor_total: $scope.lastYearReports[i]['Reports.visitor_total'],
					visitor_tour: $scope.lastYearReports[i]['Reports.visitor_tour'],
					visitor_tournonmember: $scope.lastYearReports[i]['Reports.visitor_tournonmember']
				}
				$scope.totals.lastYear.visitor_total += $scope.lastYearReports[i]['Reports.visitor_total'];
				$scope.totals.lastYear.visitor_tour += $scope.lastYearReports[i]['Reports.visitor_tour'];
				$scope.totals.lastYear.visitor_tournonmember += $scope.lastYearReports[i]['Reports.visitor_tournonmember'];
				$scope.totals.lastYear.referral_member += $scope.lastYearReports[i]['Reports.referral_member'];
				$scope.totals.lastYear.referral_inbound += $scope.lastYearReports[i]['Reports.referral_inbound'];
				$scope.totals.lastYear.referral_cards += $scope.lastYearReports[i]['Reports.referral_cards'];
				$scope.totals.lastYear.referral_called += $scope.lastYearReports[i]['Reports.referral_called'];
			};
			console.log($scope.reports);
			console.log($scope.totals);
		})
	})



	$scope.addTo = function(data, year, key){
		console.log(data, year, key)
		$scope.totals[year][key] += data;
	}
};