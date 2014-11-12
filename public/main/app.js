var app = angular.module('lds-report', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: '/views/login/login.html',
			controller: 'loginCtrl'
		})

		//ADMIN
		.when('/reports', {
			templateUrl: '/views/reports/reports.html',
			controller: 'reportsCtrl'
		})
		.when('/trends', {
			templateUrl: '/views/trends/trends.html',
			controller: 'trendsCtrl'
		})
		.when('/manage', {
			templateUrl: '/views/manage/manage.html',
			controller: 'manageCtrl'
		})

		//DIRECTOR
		.when('/director', {
			templateUrl: '/views/director/director.html',
			controller: 'directorCtrl'
		})

		
		.otherwise({
			redirectTo: '/reports'
		})
}])