'use strict';

angular.module('citasmdsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMaterial'
])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
})
.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
}])
.controller('ListCtrl', function($scope, $mdDialog) {
    $scope.settings = [
      {name: 'Pacientes', icon: 'fa fa-users fa-lg'},
      {name: 'Citas', icon: 'fa fa-calendar fa-lg'},
      {name: 'Estadísticas', icon: 'fa fa-area-chart fa-lg'},
      {name: 'Reportes', icon: 'fa fa-database fa-lg'},
      {name: 'Configuración', icon: 'fa fa-gears fa-lg'},
    ];
});
