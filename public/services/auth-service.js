var app = angular.module('lds-report');

//ALL need testing

app.service('authService', function($http){
	this.login = function(creds){
		console.log(creds);
		return $http({
			method: 'POST',
			url: '/api/login',
			data: creds
		})
	}
	this.getCurrentUser = function(){ 
		return $http({
			method: 'GET',
			url: '/api/user/me'
		})
	}
	this.logout = function(){
		return $http({
			method: 'POST',
			url: '/api/logout'
		})
	}
});