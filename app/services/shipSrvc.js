angular.module('starships').service('shipSrvc', function($http, $state){
  this.ships = ["X wing", "T-Fighter", "Millenial Falcon", "Death Star"];

  this.getShips = function(){
    return $http.get('https://swapi.co/api/starships/').then(res => {
      console.log("My list of ships: ", res.data);
      return res.data.results.map(this.getIdForShip);
    })
  }

  this.getIdForShip = function(ship){
    let urlArry = ship.url.split('/');
    ship.id = urlArry[5];
    return ship;
  }

  this.getShipById = function(id){
    return $http.get(`https://swapi.co/api/starships/${id}`).then(res => {
      return this.getIdForShip(res.data);
    }).catch(err => {
      // throw new Error("No ship found");
      $state.go('home');
    })
  }
});