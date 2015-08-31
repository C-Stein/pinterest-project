
app.controller("GlobalCtrl", ["$scope", "$firebaseArray", "$firebaseAuth", "uid", 
  function($scope, $firebaseArray, $firebaseAuth, uid) {
  var ref = new Firebase("https://pinterest-project.firebaseio.com/");
  var auth = $firebaseAuth(ref);
  ref.authWithOAuthPopup("github", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      $scope.searchCategories = "";

       
      uid.addUid(authData.uid);

      $scope.uid = uid.getUid();
      console.log("$scope.uid", $scope.uid);
      
      $scope.pins = new $firebaseArray(ref.child('pins'));

      $scope.addToUser = function(pin) {
        $scope.pins.$add({
          "img": pin.img, 
          "tag": pin.tag,
          "title": pin.title,
          "url": pin.url,
          "uid": $scope.uid
        });
      }
    }
  });
}]);
