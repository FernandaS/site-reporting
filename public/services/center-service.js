angular.module('lds-report')
	.service('centerService', centerService);

//ALL need testing

function centerService($http){
	this.getOne = function(id){
		return $http({
			method: 'GET',
			url: '/api/centers/' + id
		})
	}
	this.getAll = function(){
		return $http({
			method: 'GET',
			url: '/api/centers'
		})
	}

	this.create = function(){
		return $http({
			method: 'POST',
			url: '/api/centers'
		})
	}
	this.edit = function(id, change){
		return $http({
			method: 'PUT',
			url: '/api/centers/' + id,
			data: change
		})
	}
	this.delete = function(id){
		return $http({
			method: 'DELETE',
			url: '/api/centers/' + id
		})
	}
}