'use strict';

	angular.module('lds-report')
		.controller('testCtrl', testCtrl);

function testCtrl($scope, $timeout, userService, reportService, centerService){

/*
NOTES: The chart is working!  Yay!
So, everything from lines 12 to 61 need to be included in wherever this chart goes.
That includes the following functions:
$scope.xAxisTickFormat, compare, $scope.generateChart, $scope.displayCenters

Then to create the chart, just call $scope.generateChart with the following params:

1) 'From' date in the standard format
2) 'To' date in the standard format
3) 'Params', meaning which data from the report you want to display
4) 'Centers', an array of the centers you want to include in the chart
    You can leave this blank to display all centers.

Example: $scope.generateChart('2013-01-01', '2014-12-31', 'visitor_total', ['Provo', 'Almo'])

After the chart is initially updated, you can change the centers included by calling $scope.displayCenters
with a new array of centers.

example: $scope.displayCenters(['Provo'])

Right now, in order to change the type of data displayed (from 'visitor_total' to 'visitor_tour'),
you have to call $scope.generateChart again.  Which kinda stinks, cause it's another HTTP request.
Hopefully later on I'll have time to change that so we don't have to make another HTTP request,
but it's just too many lines to re-write right now.
*/

  $scope.xAxisTickFormatFunction = function(){
    return function(d){
      return d3.time.format('%x')(new Date(d)); //uncomment for date format
    }
  }
  function compare(a,b) {
    if (a[0] < b[0])
       return -1;
    if (a[0] > b[0])
      return 1;
    return 0;
  }
  $scope.generateChart = function generateChart(from, to, params, centers){
    reportService.getAllFrom(from, to).then(function(data){
      $scope.reportData = [];
      var reports = data.data;
      for (var i = reports.length - 1; i >= 0; i--) {
        var toPush = {
          "key": reports[i].center,
          "values": []
        }
        for (var j = reports[i].reports.length - 1; j >= 0; j--) {
          reports[i].reports[j].date = reports[i].reports[j].date.split('-');
          reports[i].reports[j].date[2] = Number(reports[i].reports[j].date[2]);
          reports[i].reports[j].date = new Date(reports[i].reports[j].date.join('-'));      
          toPush.values.push([
            reports[i].reports[j].date,
            reports[i].reports[j][params]
            ])
        };
        $scope.reportData.push(toPush);
        };
      for (var i = $scope.reportData.length - 1; i >= 0; i--) {
        $scope.reportData[i].values.sort(compare);
      };
      $scope.displayCenters(centers);
    })
  }
  $scope.displayCenters = function displayCenters(centers){
    $scope.chartData = [];
    if(!centers) {
      $scope.chartData = $scope.reportData;
      return;
    }
    for (var i = $scope.reportData.length - 1; i >= 0; i--) {
      if(centers.indexOf($scope.reportData[i].key) > -1){
        $scope.chartData.push($scope.reportData[i]);
      }
    };
  }
  $scope.generateChart('2013-01-01', '2014-12-31', 'visitor_total')


  $timeout(function(){ //This is a test, changing the centers displayed Every 5 seconds.
    $scope.displayCenters(['Provo']); // Cool, eh? :)
    $timeout(function(){
      $scope.displayCenters(['Almo Outpost']);
      $timeout(function(){
        $scope.displayCenters();
      }, 5000)
    }, 5000)
  }, 5000)


  //FOR POPULATING THE DATABASE 
  // var newUser = {
  //   username:"jake",
  //   password:"hartwell1",
  //   role:"DIRECTOR",
  //   email:"jake@gmail.com"  
  // }
  // userService.create(newUser).then(function(data){
  //   console.log(data);
  // })
  // var newReport = {
  //   date:"2013-12-01",
  //   visitor_total:850,
  //   visitor_tour:20,
  //   visitor_tournonmember:18,
  //   referral_cards:35,
  //   referral_called:34,
  //   referral_inbound:35,
  //   referral_member:19,
  //   comments:"Such month, so goooood!",
  //   centerId: 1
  // }
  // var change = {
  //   visitor_total: 15
  // }
  // reportService.create(newReport).then(function(data){
  //   console.log(data);
  // })
  // var centerChange = {
  //   city: 'Orem'
  // }

  // var newCenter = {
  //   "center":"Almo Outpost",
  //   "city":"Almo",
  //   "state":"Idaho",
  //   "country":"USA",
  //   "userId":19 //The Id of whoever is submitting (logged in)
  // }
  // centerService.create(newCenter).then(function(data){
  //   console.log(data);
  // })
}