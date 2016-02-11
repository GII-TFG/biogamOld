angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $state) {

	$scope.toTET = function(opt){
		$state.go('home.'+opt);
	};


});

