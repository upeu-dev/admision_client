'use strict';
app.controller('indexController', ['$rootScope', '$scope', '$location', 'authService', 'config', '$mdSidenav', function ($scope, $rootScope, $location, authService, config, $mdSidenav) {

    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    
    $scope.logOut = function () {
        authService.logOut();
        $location.path('/home');
    }

    $scope.authentication = authService.authentication;

}]);