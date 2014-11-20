var app = angular.module('lds-report');

app.controller('directorKiEditCtrl', function($scope, reportService, centerService){
	
	$scope.keyIndicatorEdit = function(){
		$scope.$parent.reportKi = $scope.reportKi;
	}

	$scope.editKeyIndicatorReport = function(){
		reportService.editKi($scope.reportKi['Indicators.id'], { 
			baptized: $scope.reportKi['Indicators.baptized'],
			baptismal_date: $scope.reportKi['Indicators.baptismal_date'],
			sacrament_meeting: $scope.reportKi['Indicators.sacrament_meeting'],
			member_present_lessons: $scope.reportKi['Indicators.member_present_lessons'],
			other_lessons: $scope.reportKi['Indicators.other_lessons'],
			new_investigators: $scope.reportKi['Indicators.new_investigators'],
			progressing_investigators: $scope.reportKi['Indicators.progressing_investigators'],
			rc_la: $scope.reportKi['Indicators.rc_la'],
			referrals_sent: $scope.reportKi['Indicators.referrals_sent']
		})
		.then(function(response){
			$scope.reportKi['Indicators.baptized'] = "";
			$scope.reportKi['Indicators.baptismal_date'] = "";
			$scope.reportKi['Indicators.sacrament_meeting'] = "";
			$scope.reportKi['Indicators.member_present_lessons'] = "";
			$scope.reportKi['Indicators.other_lessons'] = "";
			$scope.reportKi['Indicators.new_investigators'] = "";
			$scope.reportKi['Indicators.progressing_investigators'] = "";
			$scope.reportKi['Indicators.rc_la'] = "";
			$scope.reportKi['Indicators.referrals_sent'] = "";
			for(var i = 0; i < $scope.months.length; i++){
				if($scope.months[i] === $scope.selectedMonth){
					var newMonth = i + 1;
					var modifiedDate = $scope.selectedYear + "-" + newMonth + "-01";
					reportService.getAllKiBy(modifiedDate)
					.then(function(response){
						$scope.$parent.reportsKiByMonth = response.data;
						console.log($scope.$parent.reportsKiByMonth);
					})	
				}					
			}
		})
	}		
	
});


