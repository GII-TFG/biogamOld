angular.module('starter.controllers', [])

//.controller('HomeCtrl', function($scope, Games) {
.controller('HomeCtrl',['$scope','$http','$log', function($scope,$http,$log){
  
//$http.get('app/db.php')
$http.get('app/db.php').success(function(temas){
 // $scope.games = Games.all();
  //$scope.remove = function(game) {
    //Chats.remove(game);

     $scope.games = temas;
  })
  .error(function(err){
  	$log.error(err);
  })

}])

.controller('TetCtrl', function($scope, $stateParams, Games, TypeGame) {
  $scope.game = Games.get($stateParams.gameId);
  $scope.typeGames = TypeGame.all();
})
