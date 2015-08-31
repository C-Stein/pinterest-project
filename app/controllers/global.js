app.controller("GlobalCtrl", ["$scope", "$firebaseArray", "$firebaseAuth", "$firebaseObject", function($scope, $firebaseArray, $firebaseAuth, $firebaseObject) {

  var ref = new Firebase("https://pinterest-project.firebaseio.com/");
  var auth = $firebaseAuth(ref);


  ref.authWithOAuthPopup("github", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      $scope.searchCategories = "";
      
      $scope.pins = new $firebaseArray(ref.child('pins'));

      $scope.addToUser = function(pin) {
        var pinsIndex = $scope.pins.indexOf(pin);
        $scope.pins = new $firebaseObject(ref.child('users'));
        $scope.pins.$add(JSON.stringify($scope.pins[pinsIndex]));
      }
    }
  });
}]);