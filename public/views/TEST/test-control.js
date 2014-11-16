'use strict';

	angular.module('lds-report')
		.controller('testCtrl', testCtrl);

function testCtrl($scope, userService, reportService, centerService){
  $scope.xAxisTickFormatFunction = function(){
    return function(d){
      return d3.time.format('%x')(new Date(d)); //uncomment for date format
    }
  }

  // $scope.exampleData = [
      // {
      //     "key": "Series 1",
      //     "values": [ 
      //     [ 1 , 0] , 
      //     [ 2 , 5] , 
      //     [ 3 , 7] , 
      //     [ 4 , 10] , 
      //     [ 5 , 12]
      //     ]
      // },
      // {
      //     "key": "Series 2",
      //     "values": [ 
      //     [ 1 , 5] , 
      //     [ 2 , 7] , 
      //     [ 3 , 9] , 
      //     [ 4 , 10] , 
      //     [ 5 , 11]
      //     ]
      // }
      // ];
  function compare(a,b) {
    if (a[0] < b[0])
       return -1;
    if (a[0] > b[0])
      return 1;
    return 0;
  }
  reportService.getAllFrom('2013-01-01', '2014-11-01').then(function(data){
    $scope.exampleData = [];
    var reports = data.data;
    console.log(reports);
    for (var i = reports.length - 1; i >= 0; i--) {
      var toPush = {
        "key": reports[i].center,
        "values": []
      }
      for (var j = reports[i].reports.length - 1; j >= 0; j--) {
        reports[i].reports[j].date = reports[i].reports[j].date.split('-');
        console.log(reports[i].reports[j].date.join('-'))
        reports[i].reports[j].date[2] = Number(reports[i].reports[j].date[2]) + 1;
        reports[i].reports[j].date = new Date(reports[i].reports[j].date.join('-'));
        console.log(reports[i].reports[j].date);
        toPush.values.push([
          reports[i].reports[j].date,
          reports[i].reports[j].visitor_total
          ])
      };
      $scope.exampleData.push(toPush);
      };
    for (var i = $scope.exampleData.length - 1; i >= 0; i--) {
      $scope.exampleData[i].values.sort(compare);
    };
    console.log($scope.exampleData);
  })

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
  //   date:"2014-09-01",
  //   visitor_total:500,
  //   visitor_tour:20,
  //   visitor_tournonmember:18,
  //   referral_cards:35,
  //   referral_called:34,
  //   referral_inbound:35,
  //   referral_member:19,
  //   comments:"Such month, so goooood!",
  //   centerId: 3
  // }
  // var change = {
  //   visitor_total: 15
  // }
  // reportService.edit(9, change).then(function(data){
  //   console.log(data);
  // })
  // var centerChange = {
  //   city: 'Orem'
  // }
  // centerService.delete(6).then(function(data){
  //   console.log(data);
  // })
}