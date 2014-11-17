var app = angular.module('lds-report');

app.controller('reportCreateCustomCtrl', function($scope, reportService, centerService){

	$scope.reports = [];
	$scope.years = [2011, 2012, 2013, 2014, 2015];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	$scope.centers = [{name:'Temple Square'}];
/*
The getAllCenters could possibly happen in reportsCtrl.
That way the centers can be shared between all of the controllers
on the reports page.  The reportCreatCustomCtrl and
reportAddSiteCtrl will inherit the scope from reportsCtrl and
have access to the center data.  It might make it a tad bit
cleaner.
*/

});

