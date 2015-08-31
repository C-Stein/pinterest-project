app.controller("GlobalCtrl", ["$scope", "$firebaseArray", "$firebaseAuth", function($scope, $firebaseArray, $firebaseAuth) {

  var ref = new Firebase("https://pinterest-project.firebaseio.com/pins");
  var auth = $firebaseAuth(ref);

  ref.authWithOAuthPopup("github", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });

  $scope.searchCategories = "";
  
  $scope.pins = new $firebaseArray(ref);

}]);