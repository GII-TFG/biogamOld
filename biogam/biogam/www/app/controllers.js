
angular.module('starter.controllers', [])



.controller("HomeCtrl", function($scope, Temas ) {

     console.log("yo uso la bd ");

     Temas.all();
    
})


.controller('TetCtrl', function($scope, $stateParams, Games, TypeGame) {
  $scope.game = Games.get($stateParams.gameId);
  $scope.typeGames = TypeGame.all();
})
