angular.module('lds-report')
	.controller('monthTotalCtrl', monthTotalCtrl);

function monthTotalCtrl($scope, $routeParams, reportService){

	var splitDate = $routeParams.month.split('-');
	$scope.date = new Date(splitDate[0], splitDate[1] - 1);
	$scope.lastYear = new Date(splitDate[0]-1, splitDate[1]-1);


	reportService.getAllBy($routeParams.month).then(function(data){
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
			};
			console.log($scope.reports);
		})
	})
};