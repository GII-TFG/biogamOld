
angular.module('starter.controllers', [])



.controller("HomeCtrl", function($scope, Temas ) {

     $scope.temas = Temas.all();
    
})


.controller('TetCtrl', function($scope, $stateParams, Games, TypeGame) {
  $scope.game = Games.get($stateParams.gameId);
  $scope.typeGames = TypeGame.all();
})
