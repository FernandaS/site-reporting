angular.module('lds-report')
	.service('centerService', centerService);

//ALL need testing
/*
When submitting a new center, the structure is as follows:

var newCenter = {
  "center":"Provo",
  "city":"Provo",
  "state":"Utah",
  "country":"USA",
  "userId":1 //The Id of whoever is submitting (logged in)
}

*/

function centerService($http){
	this.getOne = function(id){ //WORKS
		return $http({
			method: 'GET',
			url: '/api/centers/' + id
		})
	}
	this.getAll = function(){ //WORKS
		return $http({
			method: 'GET',
			url: '/api/centers'
		})
	}

	this.create = function(data){ //WORKS
		return $http({
			method: 'POST',
			url: '/api/centers',
			data: data
		})
	}
	this.edit = function(id, change){ //WORKS
		return $http({
			method: 'PUT',
			url: '/api/centers/' + id,
			data: change
		})
	}
	this.delete = function(id){ //WORKS
		return $http({ //Does not pass back data.
			method: 'DELETE',//Assume it works on request.
			url: '/api/centers/' + id
		})
	}
	this.getAllReports = function(id){
		return $http({
			method: 'GET',
			url: '/api/reports/getAllReports/' + id
		})
	}
	this.getAllKIReports = function(id){
		return $http({
			method: 'GET',
			url: '/api/reports/ki/getAllReports/' + id
		})
	}
}