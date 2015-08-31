app.controller("PersonalCtrl", ["$scope", "$firebaseArray", "uid", function($scope, $firebaseArray, uid) {
  
  var ref = new Firebase("https://pinterest-project.firebaseio.com/pins");
  var currentUser = uid.getUid();
  
  ref.orderByChild("uid").equalTo(currentUser);
  $scope.pins = new $firebaseArray(ref);

}]);