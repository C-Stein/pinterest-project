app.controller("modalCtrl", ["$scope", "$firebaseArray", "uid", function($scope, $firebaseArray, uid) {
  
  var ref = new Firebase("https://pinterest-project.firebaseio.com");
  
  var pinIndex = $scope.pins.indexOf(pin);
  console.log("This index", pinIndex);
  
}]);




