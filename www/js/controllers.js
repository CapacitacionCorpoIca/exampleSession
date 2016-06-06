angular.module('app.controllers', [])

.controller('LoginCtrl', function($scope, $state, $localStorage) {
  
  $scope.loginData = {};
  $scope.doLogin = doLogin;
  
  
  function doLogin(){
    //Guardar token
    $localStorage.token = btoa( $scope.username + ':' + $scope.password);
    $state.go('app.home');
  }

})

.controller('MenuCtrl', function($scope, $localStorage, $ionicHistory, $state) {
  
  $scope.logout = logout;
  
  function logout(){
    
    $ionicHistory.clearCache()
    .then(function(){
      $localStorage.$reset();
      $state.go('login');
    });
    
  }

})

.controller('HomeCtrl', function($scope, RandomUserService) {

  $scope.users = [];

  RandomUserService.getUsers()
  .then(function(response){
    $scope.users = response.data.results;
  });

})

.controller('ProfileCtrl', function($scope, $localStorage) {
  
  $scope.token = $localStorage.token;

})