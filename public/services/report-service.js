angular.module('lds-report')
	.service('reportService', reportService);

//ALL need testing

function reportService($http){
	this.getAllBy = function(date){
		return $http({
			method: 'GET',
			url: '/api/reports?month=' + date;
		})
	}
	this.getAllFrom = function(start, end){
		return $http({
			method: 'GET',
			url: '/api/reports?start=' + start + '&end=' + end
		})
	}
	this.getListBy = function(date){
		return $http({
			method: 'GET',
			url: '/api/reports/list?month=' + date
		})
	}

	this.getOneBy = function(center, date){
		return $http({
			method: 'GET',
			url: '/api/reports/' + center + '?month=' + date
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



	// this.getOne = function(id){
	// 	return $http({
	// 		method: 'GET',
	// 		url: '/api/reports/' + id
	// 	})
	// }

	// this.getAll = function(){
	// 	return $http({
	// 		method: 'GET',
	// 		url: '/api/reports/data'
	// 	})
	// }

	// this.getList = function(){
	// 	return $http({
	// 		method: 'GET',
	// 		url: '/api/reports/list'
	// 	})
	// }
}