angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Games) {

  $scope.games = Games.all();
  $scope.remove = function(game) {
    Chats.remove(game);
  };
})

.controller('TetCtrl', function($scope, $stateParams, Games, TypeGame) {
  $scope.game = Games.get($stateParams.gameId);
  $scope.typeGames = TypeGame.all();
})
