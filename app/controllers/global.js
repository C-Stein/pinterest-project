app.controller("GlobalCtrl", ["$scope", "$firebaseArray", "$firebaseAuth", "uid", "$location",
  function($scope, $firebaseArray, $firebaseAuth, uid, $location) {
  var ref = new Firebase("https://pinterest-project.firebaseio.com/");
  var auth = $firebaseAuth(ref);

  if (!!uid.isLoggedIn() && uid.isLoggedIn() !== null) {
    runPage();
  } else {
      ref.authWithOAuthPopup("github", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        uid.addUid(authData.uid);
        $scope.uid = uid.getUid();
        console.log("$scope.uid", $scope.uid);
        runPage();
      }
    });    
  }

  function runPage() {
    $scope.searchCategories = "";      
    $scope.pins = new $firebaseArray(ref.child('pins'));


    $scope.addToUser = function(pin) {
      $scope.pins.$add({
        "img": pin.img, 
        "tag": pin.tag,
        "title": pin.title,
        "url": pin.url,
        "uid": $scope.uid
      });
      $location.url("/personal");
    };     
  }
}]);

