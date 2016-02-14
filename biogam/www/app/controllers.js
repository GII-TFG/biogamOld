angular.module('starter.controllers', [])

//.controller('HomeCtrl', function($scope, Games) {
.controller('HomeCtrl',['$scope','$http', function($scope,$http){
  
	
$http.get('http://localhost/biogam_serve/index.php/biogam')
.success(function(result){
  
  $scope.games = result;
    
  })
  
}])

.controller('TetCtrl', function($scope, $stateParams, Games, TypeGame) {
  $scope.game = Games.get($stateParams.gameId);
  $scope.typeGames = TypeGame.all();
})
