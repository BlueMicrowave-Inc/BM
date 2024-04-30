var FarmClickerApp = angular.module('FarmClickerApp', ['ngRoute']);
//TODO: routing
FarmClickerApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'ApplicationController',
    templateUrl: 'html/FarmClicker/modules/application/app.html'
  })
  .when('/about', {
    templateUrl: 'html/FarmClicker/modules/about/about.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
