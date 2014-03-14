angular.module("app")
.config(function config( $stateProvider ) {
    $stateProvider.state( 'login', {
        url: '/login',
        views: {
            "main": {
                controller: 'LoginController',
                templateUrl: 'login.html'
            }
        },
        data:{ pageTitle: 'Login' }
    });
})
.controller('LoginController', function($scope, $location, AuthenticationService) {
  $scope.credentials = { username: "", password: "" };

  var onLoginSuccess = function() {
    $location.path('/home');
  };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials).success(onLoginSuccess);
  };
});
