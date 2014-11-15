'use strict';

	angular.module('lds-report')
		.controller('testCtrl', testCtrl);

function testCtrl($scope, userService, reportService, centerService){
  $scope.exampleData = [
      {
          "key": "Series 1",
          "values": [ 
          [ 1025409600000 , 0] , 
          [ 1028088000000 , -6.3382185140371] , 
          [ 1030766400000 , -5.9507873460847] , 
          [ 1033358400000 , -11.569146943813] , 
          [ 1036040400000 , -5.4767332317425]]
      }];

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