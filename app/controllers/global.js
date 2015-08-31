app.controller("GlobalCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

  $scope.searchCategories = "";
  
  var ref = new Firebase("https://pinterest-project.firebaseio.com/pins");
  $scope.pins = new $firebaseArray(ref);

}]);