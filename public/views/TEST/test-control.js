'use strict';

google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(function() {
	angular.module('lds-report')
		.controller('testCtrl', testCtrl);
});

function testCtrl($scope, userService){
	$scope.test = 'TESTTTTT'
	var data = google.visualization.arrayToDataTable([
        ['Year', 'Visitors'],
        ['2004', 100],
        ['2005', 125],
        ['2006', 250],
        ['2007', 225]
      ]);
      var options = {
        title: 'Site Visitation'
      };
      var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));
 
      chart.draw(data, options);
}