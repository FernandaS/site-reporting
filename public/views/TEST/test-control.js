angular.module('lds-report')
	.controller('testCtrl', testCtrl);

function testCtrl($scope){
	google.load('visualization', '1.0', {'packages':['corechart']});
	// google.setOnLoadCallback(function(){
	// 	console.log('Worked!')
	// });
}