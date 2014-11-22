var app = angular.module('lds-report');

app.controller('directorAddReportCtrl', function($scope, reportService, centerService){
	
	$scope.addReport = function(){
		for(var i = 0; i < $scope.months.length; i++){
			if($scope.months[i] === $scope.selectedMonthAdd){
				var newMonth = i + 1;
				var modifiedDate = $scope.selectedYearAdd + "-" + "0" + newMonth + "-01";
				reportService.create({
					date: modifiedDate,
					visitor_total: $scope.visitor_total,
					visitor_tour: $scope.visitor_tour,
					visitor_tournonmember: $scope.visitor_tournonmember,
					referral_cards: $scope.referral_cards,
					referral_called: $scope.referral_called,
					referral_inbound: $scope.referral_inbound,
					referral_member: $scope.referral_member,
					comments: $scope.comments,
					centerId: $scope.selectedCenter.id
				})
				.then(function(response){
					$scope.visitor_total = "";
					$scope.visitor_tour = "",
					$scope.visitor_tournonmember = "",
					$scope.referral_cards = "",
					$scope.referral_called = "",
					$scope.referral_inbound = "",
					$scope.referral_member = "",
					$scope.comments = ""
					centerService.getAllReports($scope.selectedCenter.id)
					.then(function(response){
						$scope.$parent.reports = response.data;
					})	
				})

			}					
		}
	}	
});
