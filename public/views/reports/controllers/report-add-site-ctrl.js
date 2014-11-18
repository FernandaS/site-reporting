var app = angular.module('lds-report');

app.controller('reportAddSiteCtrl', function($scope, reportService, centerService){


	$scope.addNewSiteReport = function(){
		for(var i = 0; i < $scope.months.length; i++){
			if($scope.months[i] === $scope.selectedMonth){
				var newMonth = i;
				var modifiedDate = $scope.selectedYear + "-" + newMonth + "-01";
					reportService.create({
						date: modifiedDate,
						visitor_total: $scope.visitor_total,
						visitor_tour: $scope.visitor_tour,
						visitor_tournonmember: $scope.visitor_tournonmember,
						referral_cards: $scope.referral_cards,
						referral_called: $scope.referral_called,
						referral_inbound: $scope.referral_inbound,
						referral_member: $scope.referral_member,
						comments: $scope.comments
					})
					// 	.then(function(response){
					// 		console.log(test);
		
					// }

			}					
	}
	}	
});
