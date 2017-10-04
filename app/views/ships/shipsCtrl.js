angular.module('starships').controller('shipsCtrl', function($scope, shipSrvc){
  shipSrvc.getShips().then((ships) => {
    $scope.ships = ships;
  })
});