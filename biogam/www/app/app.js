// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('scaffold', {
    abstract: true,
    templateUrl: "app/templates/scaffold.html"
    })
    .state('tabs', {
      url: '/tab',
      parent: 'scaffold',
      abstract: true,
      templateUrl: "app/templates/tabs.html"
    })

    .state('home', {
      url: '/home',
      parent: "tabs",
      views: {
        'home-tab':{
        templateUrl: 'app/templates/home.html',
        controller: 'HomeCtrl'
       }
      }
    })

    .state('home.tet', {
    url: '/:gameId',
    views: {
        'home-tab@tabs': { //remember @ choose the state to go
          templateUrl: 'app/templates/page2TET.html',
          controller: 'TetCtrl'
        }
      }
    })

    
    .state('home.tet.0', {
      url: '/theory',
      views: {
        'home-tab@tabs': {
          templateUrl: 'app/templates/theory.html',
          //controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('home.tet.1', {
      url: '/exercises',
      views: {
        'home-tab@tabs': {
          templateUrl: 'app/templates/exercises.html',
          //controller: 'ChatDetailCtrl'
        }
      }
    })


    .state('home.tet.2', {
      url: '/test',
      views: {
        'home-tab@tabs': {
        //  templateUrl: 'app/templates/test  .html',
          //controller: 'ChatDetailCtrl'
        }
      }
    })

        $urlRouterProvider.otherwise('tab/home');

  }); 

