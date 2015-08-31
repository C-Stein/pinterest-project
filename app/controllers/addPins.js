app.controller("addPinCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {

    var ref = new Firebase("https://pinterest-project.firebaseio.com/pins");

    $scope.pins = $firebaseArray(ref);

    console.log("$Scope.pins from addPins.js", $scope.pins);

    $scope.addPin = function() {
      console.log("adding pin");
    $scope.pins.$add({
      "img": $scope.newPin.img, 
      "tag": $scope.newPin.tag,
      "title": $scope.newPin.title,
      "url": $scope.newPin.url,
      "uid": ""
    });
    console.log($scope.newPin);
    $scope.newPin = {"":""};
   };
}]);