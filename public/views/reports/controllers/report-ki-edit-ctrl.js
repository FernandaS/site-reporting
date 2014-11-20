var app = angular.module('lds-report');

	app.controller('reportKiEditCtrl', function($scope, reportService, centerService){

		$scope.center = $scope.$parent.selectedCenter; 
		$scope.month = $scope.$parent.selectedMonth;
		$scope.year = $scope.$parent.selectedYear;

		$scope.keyIndicatorEdit = function(id){
			for(var i = 0; i < $scope.months.length; i++){
				if($scope.months[i] === $scope.selectedMonth){
					var newMonth = i;
					var date = $scope.selectedYear + "-" + newMonth + "-01";
					reportService.getOneKiBy(id, date)
					.then(function(response){
						$scope.report = response.data;
						console.log($scope.report);
					})
				}

			}
		}

		$scope.editKeyIndicatorReport = function(){
			reportService.editKi($scope.report['Reports.id'], { 
				baptized: $scope.baptized['Reports.baptized'],
				baptismal_date: $scope.baptismal_date['Reports.baptismal_date'],
				sacrament_meeting: $scope.sacrament_meeting['Reports.sacrament_meeting'],
				member_present_lessons: $scope.member_present_lessons['Reports.member_present_lessons'],
				other_lessons: $scope.other_lessons['Reports.other_lessons'],
				new_investigators: $scope.new_investigators['Reports.new_investigators'],
				progressing_investigators: $scope.progressing_investigators['Reports.progressing_investigators'],
				rc_la: $scope.rc_la['Reports.rc_la'],
				referrals_sent: $scope.referrals_sent['Reports.referrals_sent']
			})
			.then(function(response){
				$scope.baptized['Reports.baptized'] = "";
				$scope.baptismal_date['Reports.baptismal_date'] = "";
				$scope.sacrament_meeting['Reports.sacrament_meeting'] = "";
				$scope.member_present_lessons['Reports.member_present_lessons'] = "";
				$scope.other_lessons['Reports.other_lessons'] = "";
				$scope.new_investigators['Reports.new_investigators'] = "";
				$scope.progressing_investigators['Reports.progressing_investigators'] = "";
				$scope.rc_la['Reports.rc_la'] = "";
				$scope.referrals_sent['Reports.referrals_sent'] = "";
			});
		}	
});