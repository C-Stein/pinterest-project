var app = angular.module("Pinterest", ['firebase', 'angular.filter', 'ngRoute',]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pin-form', {
        templateUrl: 'partials/add-pin-form.html',
        controller: 'addPinCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
      
}]);