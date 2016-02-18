
angular.module('starter.controllers', [])



.controller("HomeCtrl", function($scope, Temas ) {

     $scope.temas = Temas.all();
})


.controller('TetCtrl', function($scope, $stateParams, Categorias){
  $scope.tema = Categorias.getCategoriasTema($stateParams.temaId); 
  
})
