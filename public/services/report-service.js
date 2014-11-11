angular.module('lds-report')
	.service('reportService', reportService);

//ALL need testing

function reportService($http){
	// this.getOne = function(id){
	// 	return $http({
	// 		method: 'GET',
	// 		url: '/api/reports/' + id
	// 	})
	// }
	this.getOneBy = function(center, month, year){
		return $http({
			method: 'GET',
			url: '/api/reports/' + center + '/'/*ADD PARAMS HERE*/
		})
	}
	// this.getAll = function(){
	// 	return $http({
	// 		method: 'GET',
	// 		url: '/api/reports/data'
	// 	})
	// }
	this.getAllBy = function(month, year){
		return $http({
			method: 'GET',
			url: '/api/reports/' /*ADD PARAMS HERE*/
		})
	}
	// this.getList = function(){
	// 	return $http({
	// 		method: 'GET',
	// 		url: '/api/reports/list'
	// 	})
	// }
	this.getListBy = function(month, year){
		return $http({
			method: 'GET',
			url: '/api/reports/list' /*ADD PARAMS HERE*/
		})
	}

	this.create = function(){
		return $http({
			method: 'POST',
			url: '/api/reports'
		})
	}
	this.edit = function(id, change){
		return $http({
			method: 'PUT',
			url: '/api/reports/' + id,
			data: change
		})
	}
	this.delete = function(id){
		return $http({
			method: 'DELETE',
			url: '/api/reports/' + id
		})
	}
}