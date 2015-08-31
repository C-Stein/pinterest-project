app.controller("PersonalCtrl", ["$scope", "$firebaseArray", "uid", function($scope, $firebaseArray, uid) {
  
  var ref = new Firebase("https://pinterest-project.firebaseio.com");
  var currentUser = uid.getUid();
  
  ref.child('pins').orderByChild('uid').equalTo(currentUser).on('value', function(snapshot){
    $scope.pins = snapshot.val();
    console.log($scope.pins);
  });
}]);