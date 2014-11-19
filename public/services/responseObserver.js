// angular.module('lds-report')
//   .factory('responseObserver', responseObserver);

var app = angular.module('lds-report');

app.factory('responseObserver',
function responseObserver($q, $window) {
   return function (promise) {
       return promise.then(function (successResponse) {
           return successResponse;
       }, function (errorResponse) {
       switch (errorResponse.status) {
       case 401:
           $window.location = '/#/login';
           break;
       case 403:
           $window.location = '/#/login';
           break;
       // case 500:
       //     $window.location = './500.html';
      }
      return $q.reject(errorResponse);
     });
   };
});