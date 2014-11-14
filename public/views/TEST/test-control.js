'use strict';

google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(function() {
	angular.module('lds-report')
		.controller('testCtrl', testCtrl);
});

function testCtrl($scope, userService, reportService){
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
  // var newUser = {
  //   username:"ean",
  //   password:"hartwell1",
  //   role:"ADMIN",
  //   email:"ean@gmail.com"  
  // }
  // userService.create(newUser).then(function(data){
  //   console.log(data);
  // })
  var newReport = {
    date:"2014-09-01",
    visitor_total:500,
    visitor_tour:20,
    visitor_tournonmember:18,
    referral_cards:35,
    referral_called:34,
    referral_inbound:35,
    referral_member:19,
    comments:"Such month, so goooood!",
    centerId: 3
  }
  var change = {
    visitor_total: 9001
  }
  reportService.delete(11).then(function(data){
    console.log(data);
  })
}