var app = angular.module("Pinterest", ['firebase', 'angular.filter', 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/global.html',
        controller: 'GlobalCtrl'
      });
}]);