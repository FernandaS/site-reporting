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

		$scope.editSingleReport = function(){
			console.log($scope.report['Reports.id']);
			reportService.edit($scope.report['Reports.id'], { 
				visitor_total: $scope.report['Reports.visitor_total'],
				visitor_tour: $scope.report['Reports.visitor_tour'],
				visitor_tournonmember: $scope.report['Reports.visitor_tournonmember'],
				referral_cards: $scope.report['Reports.referral_cards'],
				referral_called: $scope.report['Reports.referral_called'],
				referral_inbound: $scope.report['Reports.referral_inbound'],
				referral_member: $scope.report['Reports.referral_member'],
				comments: $scope.report['Reports.comments']
			})
			.then(function(response){
				$scope.report['Reports.visitor_total'] = "";
				$scope.report['Reports.visitor_tour'] = "";
				$scope.report['Reports.visitor_tournonmember'] = "";
				$scope.report['Reports.referral_cards'] = "";
				$scope.report['Reports.referral_called'] = "";
				referral_inbound: $scope.report['Reports.referral_inbound'] = "";
				$scope.report['Reports.referral_member'] = "";
				$scope.report['Reports.comments'] = "";
				// getEditedReports()
			});
		}	 
});