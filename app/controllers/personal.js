app.controller("PersonalCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
  
  var ref = new Firebase("https://pinterest-project.firebaseio.com/pins");
  $scope.pins = new $firebaseArray(ref);

}]);