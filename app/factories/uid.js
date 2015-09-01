app.factory("uid", function() {
  var uid;


  return {
    addUid: function(user) {
       uid = user;
      return uid;
    },
    getUid: function () {
        return uid;
    },
    isLoggedIn: function() {
        var ref = new Firebase("https://pinterest-project.firebaseio.com/");
        console.log(ref.getAuth());
        return !!ref.getAuth();
    }
  };
});

// *Set it as a dependency in a controller