(function () {
    "use strict";

    var appAngular = angular.module("myapp.controllers", []);
    

    appAngular.controller("appCtrl", ["$scope", function ($scope) {
    }])

    //homeCtrl provides the logic for the home screen
    appAngular.controller("homeCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.refresh = function () {
            //refresh binding
            $scope.$broadcast("scroll.refreshComplete");
        };
    }])

    //errorCtrl managed the display of error messages bubbled up from other controllers, directives, myappService
    appAngular.controller("errorCtrl", ["$scope", "myappService", function ($scope, myappService) {
        //public properties that define the error message and if an error is present
        $scope.error = "";
        $scope.activeError = false;

        //function to dismiss an active error
        $scope.dismissError = function () {
            $scope.activeError = false;
        };

        //broadcast event to catch an error and display it in the error section
        $scope.$on("error", function (evt, val) {
            //set the error message and mark activeError to true
            $scope.error = val;
            $scope.activeError = true;

            //stop any waiting indicators (including scroll refreshes)
            myappService.wait(false);
            $scope.$broadcast("scroll.refreshComplete");

            //manually apply given the way this might bubble up async
            $scope.$apply();
        });
    }])
   
});

var app = angular.module('myappl',['ionic']);
app.controller('exerciseController', function ($scope) {
    $scope.levelList = [
 {
     id: 1,
     title: "Nivel 1",
     numQuestions: 10,
     questions:[true, false, false, false, false, false, false, false, false, false]
 },
 {
     id: 2,
     title: "Nivel 2",
     numQuestions: 10,
     questions:[false, false, false, false, false, false, false, false, false, false]
 },
 {
     id: 3,
     title: "Nivel 3",
     numQuestions: 10,
     questions: [true, true, false, false, false, false, false, false, false, false]
 }
    ];

});
var app = angular.module('myapp', ['ionic']);
app.controller('theoryController', function ($scope) {
    $scope.itemUnit = [
      {
          id: "1",
          title: "Pure line."
      },
      {
          id: "2",
          title: "Variability."
      },
      {
          id: "3",
          title: "Locus/Loci."
      },
      {
          id: "4",
          title: "Phenotype."
      },
      {
          id: "5",
          title: "Gene"
      },
      {
          id: "6",
          title: "Allele"
      },
      {
          id: "7",
          title: "Genotype"
      },
      {
          id: "8",
          title: "Mendels first law"
      },
      {
          id: "9",
          title: "Interaction between alleles of the same locus"
      }
    ];
});

var appLevel = angular.module('myapplev', []);
appLevel.controller('boxController', function ($scope) {
    $scope.boxShowAaxaa = false;
    $scope.boxShowAaxAa = false;
    $scope.boxShowLethalgenes = false;
    $scope.boxShowA1A2xA1A2 = false;
    $scope.boxShowA1A2xA1A3 = false;
    $scope.boxShowA1A2xA3A4 = false;

    $scope.showBoxAaxaa = function () {
        $scope.boxShowAaxaa = !$scope.boxShowAaxaa;
        $scope.boxShowAaxAa = false;
        $scope.boxShowLethalgenes = false;
        $scope.boxShowA1A2xA1A2 = false;
        $scope.boxShowA1A2xA1A3 = false;
        $scope.boxShowA1A2xA3A4 = false;

    }
    $scope.showBoxAaxAa = function () {
        $scope.boxShowAaxAa = !$scope.boxShowAaxAa;
        $scope.boxShowAaxaa = false;
        $scope.boxShowLethalgenes = false;
        $scope.boxShowA1A2xA1A2 = false;
        $scope.boxShowA1A2xA1A3 = false;
        $scope.boxShowA1A2xA3A4 = false;
    }
    $scope.showBoxLethalgenes = function () {
        $scope.boxShowLethalgenes = !$scope.boxShowLethalgenes;
        $scope.boxShowAaxaa = false;
        $scope.boxShowAaxAa = false;
        $scope.boxShowA1A2xA1A2 = false;
        $scope.boxShowA1A2xA1A3 = false;
        $scope.boxShowA1A2xA3A4 = false;
    }
    $scope.showBoxA1A2xA1A2 = function () {
        $scope.boxShowA1A2xA1A2 = !$scope.boxShowA1A2xA1A2;
        $scope.boxShowAaxaa = false;
        $scope.boxShowAaxAa = false;
        $scope.boxShowLethalgenes = false;
        $scope.boxShowA1A2xA1A3 = false;
        $scope.boxShowA1A2xA3A4 = false;
    }
    $scope.showBoxA1A2xA1A3 = function () {
        $scope.boxShowA1A2xA1A3 = !$scope.boxShowA1A2xA1A3;
        $scope.boxShowAaxaa = false;
        $scope.boxShowAaxAa = false;
        $scope.boxShowLethalgenes = false;
        $scope.boxShowA1A2xA1A2 = false;
        $scope.boxShowA1A2xA3A4 = false;
    }
    $scope.showBoxA1A2xA3A4 = function () {
        $scope.boxShowA1A2xA3A4 = !$scope.boxShowA1A2xA3A4;
        $scope.boxShowAaxaa = false;
        $scope.boxShowAaxAa = false;
        $scope.boxShowLethalgenes = false;
        $scope.boxShowA1A2xA1A2 = false;
        $scope.boxShowA1A2xA1A3 = false;
    }
});


