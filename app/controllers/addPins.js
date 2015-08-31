app.controller("addPinCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {

    var ref = new Firebase("https://pinterest-project.firebaseio.com/pins");

    $scope.pins = $firebaseArray(ref);

    $scope.addPin = function() {
    $scope.pins.$add({
      "img": $scope.newPin.img, 
      "tag": $scope.newPin.tag,
      "title": $scope.newPin.title,
      "url": $scope.newPin.url,
      "uid": ""
    });
    $scope.newPin = {"":""};
   };


    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });

  }]);