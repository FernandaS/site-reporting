'use strict';

	angular.module('lds-report')
		.controller('testCtrl', testCtrl);

function testCtrl($scope, userService, reportService, centerService){
	$scope.test = 'TESTTTTT'
  $scope.chartType = 'line';
  $scope.chartConfig = {
    title: 'Visitors Report'
  }
  $scope.chartData = {
    series: [],
    data: [{
      x: [],
      y: [],
      tooltip: "This is a tooltip"
    }]
  }

// $scope.chartData = {
//     series: ['Sales', 'Income', '<i>Expense</i>', 'Laptops', 'Keyboards'], //CENTERS
//     data: [{
//       x: "Sales", //MONTH
//       y: [100, 500, 0], //NUMBER OF VISITORS
//       tooltip: "this is tooltip"
//     }, {
//       x: "Not Sales",
//       y: [300, 100, 100]
//     }, {
//       x: "Tax",
//       y: [351]
//     }, {
//       x: "Not Tax",
//       y: [54, 0, 879]
//     }]
//   };
// $scope.chartConfig = {
//     labels: false,
//     title: "Products",
//     legend: {
//       display: true,
//       position: 'left'
//     },
//     innerRadius: 0
//   };

  // reportService.getAllFrom('2014-01-01', '2014-12-01').then(function(data){
  //   console.log(data);
  //   var reportsObject = data.data;
  //   for(var key in reportsObject){
  //     var toPush = {
  //       x: [],
  //       y: [],
  //       tooltip: reportsObject[key].center
  //     };
  //     for (var i = reportsObject[key].reports.length - 1; i >= 0; i--) {
  //       toPush.y.push(reportsObject[key].reports[i].visitor_total);
  //       toPush.x.push(reportsObject[key].reports[i].date);
  //     };
  //     $scope.chartData.data.push(toPush);
  //     console.log(toPush);
  //   }
  // })


  reportService.getAllFrom('2014-01-01', '2014-12-01').then(function(data){
    var chartData = {
      data: [],
      series: []
    };
    console.log(data);
    var reportsObject = data.data;
    var eventualData = [];
    for(var key in reportsObject){
      chartData.series.push(reportsObject[key].center)
      for (var i = reportsObject[key].reports.length - 1; i >= 0; i--) {
        var toPush = {
          y: [reportsObject[key].reports[i].visitor_total],
          x: reportsObject[key].reports[i].date.split('-')[1],
          tooltip: reportsObject[key].center
        };
        chartData.data.push(toPush);
        // console.log(toPush);
      };
    }
    console.log(chartData);
    $scope.chartData = chartData;
  });



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