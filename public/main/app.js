var app = angular.module('lds-report', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/views/home/home.html',
			controller: 'homeCtrl'
		})
		.when('/login', {
			templateUrl: '/views/login/login.html',
			controller: 'loginCtrl'
		})
		.when('/manage', {
			templateUrl: '/views/manage/manage.html',
			controller: 'manageCtrl'
		})
		.when('/reports', {
			templateUrl: '/views/reports/reports.html',
			controller: 'reportsCtrl'
		})
		.when('/trends', {
			templateUrl: '/views/trends/trends.html',
			controller: 'trendCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
}])