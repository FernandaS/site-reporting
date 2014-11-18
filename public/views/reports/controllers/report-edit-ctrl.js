var app = angular.module('lds-report');

app.controller('reportEditCtrl', function($scope, reportService, centerService){

	$scope.center = $scope.$parent.selectedCenter; 
	$scope.month = $scope.$parent.selectedMonth;
	$scope.year = $scope.$parent.selectedYear;

	$scope.getSingleReportEdit = function(id){
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

	///////// EDIT DOES NOT SAVE NEW CHANGES///////////

	$scope.editSingleReport = function(){
		reportService.edit($scope.report['Reports.id'], { 
			visitor_total: $scope.visitor_total,
			visitor_tour: $scope.visitor_tour,
			visitor_tournonmember: $scope.visitor_tournonmember,
			referral_cards: $scope.referral_cards,
			referral_called: $scope.referral_called,
			referral_inbound: $scope.referral_inbound,
			referral_member: $scope.referral_member
		})
			.then(function(response){
				console.log('saved');
			});
	}

});