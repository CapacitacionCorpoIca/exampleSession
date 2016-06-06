angular.module('app.services', [])

.factory('RandomUserService', function( $http ) {
  return {
    getUsers: function(){
      return $http.get('https://randomuser.me/api/?results=50');
    }
  }
})

.factory('UserService', function( $http, $localStorage ) {
  return {
    crearteUser: function( data ){
      return this.$http({
        method: 'POST',
        url: 'https://webservice.com/users',
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : 'Basic ' + $localStorage.token
        },
        data: data
      })
    },
    getUsers: function(){
      return this.$http({
        method: 'GET',
        url: 'https://webservice.com/users',
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : 'Basic ' + $localStorage.token
        }
      })
    },
    getUser: function( idUser ){
      return this.$http({
        method: 'GET',
        url: 'https://webservice.com/users/' + idUser,
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : 'Basic ' + $localStorage.token
        }
      })
    },
    updateUser: function( idUser, data ){
      return this.$http({
        method: 'PUT',
        url: 'https://webservice.com/users/' + idUser,
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : 'Basic ' + $localStorage.token
        },
        data: data
      })
    },
    deleteUser: function( idUser ){
      return this.$http({
        method: 'DELETE',
        url: 'https://webservice.com/users/' + idUser,
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : 'Basic ' + $localStorage.token
        }
      })
    },
  }
})