angular.module('app.controllers', [])

.controller('LoginCtrl', function($scope, $state, $localStorage) {
  
  $scope.loginData = {};
  $scope.doLogin = doLogin;
  
  function doLogin(){
    //Guardar token
    $localStorage.token = btoa( $scope.username + ':' + $scope.password);
    $state('app.home');
  }

})

.controller('MenuCtrl', function($scope) {

})

.controller('HomeCtrl', function($scope) {

})

.controller('ProfileCtrl', function($scope) {

})