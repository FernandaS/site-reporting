'use strict';

google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(function() {
	angular.module('lds-report')
		.controller('testCtrl', testCtrl);
});

function testCtrl($scope){
	$scope.test = 'TESTTTTT'
	var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
      ]);
      var options = {
        title: 'Company Performance'
      };
      var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));
 
      chart.draw(data, options);
}