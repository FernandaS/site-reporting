angular.module('lds-report')
	.service('reportService', reportService);

//NOTE all date objects (date, start, end)
//must be sent to server like the following three numbers(yyyy m d):
//%Y-%m-%d
//for example 2014-12-01 is December 1, 2014

/*
When submitting a new report, the structure is as follows:

var newReport = {
  "date":"2014-12-01",
  "visitor_total":100,
  "visitor_tour":20,
  "visitor_tournonmember":18,
  "referral_cards":35,
  "referral_called":34,
  "referral_inbound":35,
  "referral_member":19,
  "comments":"Such month, so goooood!"
}

*/


function reportService($http){
	this.getAllBy = function(date){ //WORKS
		return $http({
			method: 'GET',
			url: '/api/reports/allBy?date=' + date
		})
	}

	this.getAllFrom = function(start, end){ //WORKS
		return $http({
			method: 'GET',
			url: '/api/reports/allFrom?start=' + start + '&end=' + end
		})
	}

	this.getOneBy = function(center, date){ //WORKS
		return $http({
			method: 'GET',
			url: '/api/reports/oneBy/' + center + '?date=' + date
		})
	}

	this.create = function(data){  //WORKS
		return $http({
			method: 'POST',
			url: '/api/reports',
			data: data
		})
	}

	this.edit = function(id, change){ //WORKS
		return $http({ 
			method: 'PUT',
			url: '/api/reports/' + id,
			data: change
		})
	}

	this.delete = function(id){ //WORKS BUT doesn't pass back data.
		return $http({ //Assume it works on request for now.
			method: 'DELETE',
			url: '/api/reports/' + id
		})
	}
}