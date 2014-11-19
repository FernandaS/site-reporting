angular.module('lds-report')
	.service('userService', userService);

//ALL need testing
/*
When submitting a new user, the structure is as follows:
var newUser = {
  "username":"Enoch",
  "password":"iRoq",
  "role":"ADMIN",
  "email":"enoch@zion.org"  
}
*/

function userService($http){
	this.getOne = function(id){ //WORKS
		return $http({
			method: 'GET',
			url: '/api/users/' + id
		})
	}
	this.getAll = function(){ //WORKS
		return $http({
			method: 'GET',
			url: '/api/users'
		})
	}

	this.create = function(user){ //WORKS
		return $http({
			method: 'POST',
			url: '/api/users',
			data: user
		})
	}
	this.edit = function(id, change){ //WORKS (returns 1 if successful)
		return $http({
			method: 'PUT',
			url: '/api/users/' + id,
			data: change
		})
	}
	this.delete = function(id){ //NOT WORKING - DO NOT USE
		return $http({ //Currently wipes the entire table.
			method: 'DELETE', //That's bad.
			url: '/api/users/' + id //Don't use.
		})
	}
//this allow director to have addtional(secondary) emails. 

	this.createEmail = function(email, id){
		return $http({
			method: 'POST',
			url: '/api/addlEmails/' + id, 
			data: {email: email}

		})
	}

	this.deleteEmail = function(id){
		return $http({
			method: 'DELETE',
			url: '/api/addlEmails/' + id
		})
	}

	


}