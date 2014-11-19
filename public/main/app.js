var app = angular.module('lds-report', ['ngRoute', 'nvd3ChartDirectives', 'nzSweetAlert']);

app.config(['$routeProvider', '$httpProvider' function($routeProvider, $httpProvider){
	$httpProvider.responseInterceptors.push(function($q, 'responseObserver');
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
		.when('/reports/site/:month', {
			templateUrl: '/views/reports/month-total/month-total-view.html',
			controller: 'monthTotalCtrl'
		})
		.when('/trends', {
			templateUrl: '/views/trends/trends.html',
			controller: 'trendsCtrl'	
		})
		.when('/manage', {
			templateUrl: '/views/manage/manage.html',
			controller: 'manageCtrl'
		})
		.when('/manage/centers', {
			templateUrl: '/views/manage/centers/center.html',
			controller: 'centerCtrl'
		})
		.when('/test', {
			templateUrl: '/views/TEST/test-page.html',
			controller: 'testCtrl'
		})

		//DIRECTOR
		.when('/director', {
			templateUrl: '/views/director/director.html',
			controller: 'directorCtrl'
		})
		// .when('/director/submit', {
		// 	templateUrl: '/views/submit-report/submit.html',
		// 	controller: 'submitReportCtrl'
		// })

		
		.otherwise({
			redirectTo: '/reports'
		})
}])