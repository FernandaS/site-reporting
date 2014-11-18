var app = angular.module('lds-report');

app.controller('reportCreateCustomCtrl', function($scope, reportService, centerService){

	$scope.reports = [];
	$scope.metrics = ['Referrals(inbound)', 'Referrals(members)', 'Referrals(cards)', 'Non-members on tours', 'Visitors on tours', 'Total visitors']	

	$scope.testNgChange = function(){
		console.log('test');
	}
});

