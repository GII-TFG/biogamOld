
angular.module('starter.controllers', [])

//.controller('HomeCtrl', function($scope, Games) {
/*.controller('HomeCtrl',['$scope','$http', function($scope,$http){
  
	
$http.get('http://localhost/biogam_serve/index.php/biogam')
.success(function(result){
  
  $scope.games = result;
    
  })
.error(function(result))
  
}])*/

/*.controller("HomeCtrl", function($scope, $cordovaSQLite, $rootScope) {
 
    $scope.games = [];
 
        var query = "SELECT id, name FROM tema";
        $cordovaSQLite.execute($rootScope.db, query, []).then(function(res) {
           alert("hola");
            if(res.rows.length > 0) {
                for(var i = 0; i < res.rows.length; i++) {
                    $scope.games.push({id: res.rows.item(i).id, name: res.rows.item(i).name});
                }
            }
        }, function (err) {
            console.error(err);
        });
    
 
})*/


.controller('TetCtrl', function($scope, $stateParams, Games, TypeGame) {
  $scope.game = Games.get($stateParams.gameId);
  $scope.typeGames = TypeGame.all();
})
