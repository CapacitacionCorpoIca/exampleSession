angular.module('app.services', [])

.factory('UserService', function( $http ) {
  return {
    getUsers: function(){
      return $http.get();
    }
  }
})