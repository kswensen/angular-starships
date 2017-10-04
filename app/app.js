angular.module('starships', ['ui.router']);

angular.module('starships').config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url:'/',
    template:'Welcome to the Starship Emporium. Fastest Ships in the Sector'
  }).state('ships', {
    url:'/starships',
    templateUrl:'/app/views/ships/ships.html', // Relative to the index.html
    controller: 'shipsCtrl'
  }).state('ship',{
    url:'/starships/:id',
    templateUrl:'/app/views/ship/ship.html',
    controller: 'shipCtrl'
  })
  
  $urlRouterProvider.otherwise('/');
});