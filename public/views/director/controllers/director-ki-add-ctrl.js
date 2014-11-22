var app = angular.module('lds-report');

app.controller('directorKiAddCtrl', function($scope, reportService, centerService){
	
	$scope.addNewKeyIndicatorReport = function(){
		for(var i = 0; i < $scope.months.length; i++){
			if($scope.months[i] === $scope.selectedMonthAdd){
				var newMonth = i + 1;
				var modifiedDate = $scope.selectedYearAdd + "-" + "0" + newMonth + "-01";
				reportService.createKi({
					date: modifiedDate,
					baptized: $scope.baptized,
					baptismal_date: $scope.baptismal_date,
					sacrament_meeting: $scope.sacrament_meeting,
					member_present_lessons: $scope.member_present_lessons,
					other_lessons: $scope.other_lessons,
					new_investigators: $scope.new_investigators,
					progressing_investigators: $scope.progressing_investigators,
					rc_la: $scope.rc_la,
					referrals_sent: $scope.referrals_sent,
					centerId: $scope.selectedCenter.id
				})
				.then(function(response){
					$scope.baptized = "";
					$scope.baptismal_date = "",
					$scope.sacrament_meeting = "",
					$scope.member_present_lessons = "",
					$scope.other_lessons = "",
					$scope.new_investigators = "",
					$scope.progressing_investigators = "",
					$scope.rc_la = ""
					$scope.referrals_sent = " ";
					centerService.getAllKIReports($scope.selectedCenter.id)
					.then(function(response){
						$scope.$parent.reportsKi = response.data;
						console.log($scope.$parent.reportsKi);
					})	
				})

			}					
		}
	}	

});