app.factory("uid", function() {
  var uid;

  return {
    addUid: function(user) {
       uid = user;
      return uid;
    },
    getUid: function () {
        return uid;
    }
  };
});

// *Set it as a dependency in a controller