
app.controller("GlobalCtrl", ["$scope", "$firebaseObject", function($scope, $firebaseObject) {

 var ref = new Firebase("https://pinterest-project.firebaseio.com/pins");
 $scope.pins = new $firebaseObject(ref);
 console.log("$scope.pins", $scope.pins);

}]);