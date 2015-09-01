app.controller("PersonalCtrl", ["$scope", "$firebaseArray", "uid", function($scope, $firebaseArray, uid) {
  
  var ref = new Firebase("https://pinterest-project.firebaseio.com");
  ref.getAuth(); 
  var currentUser = ref.getAuth().uid;  
  $scope.pins = new $firebaseArray(ref.child('pins').orderByChild('uid').equalTo(currentUser));
  console.log($scope.pins);
}]);