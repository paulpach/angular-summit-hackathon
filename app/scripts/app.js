'use strict';

/**
 * @ngdoc overview
 * @name hackathonApp
 * @description
 * # hackathonApp
 *
 * Main module of the application.
 */
angular
  .module('hackathonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'route-segment',
    'view-segment',
    'ui.bootstrap'
  ])
  .config([
    '$routeSegmentProvider', '$routeProvider',
    function($routeSegmentProvider, $routeProvider) {
      $routeSegmentProvider
        .when('/types', 'types')
        .when('/types/:id', 'types.details')
        .segment('types', {
          templateUrl: 'views/types.html',
          controller: 'TypesCtrl',
          controllerAs: 'typesCtrl'
        })
          .within()
          .segment('details', {
            templateUrl: 'views/types/details.html',
            controller: 'TypeDetailsCtrl',
            controllerAs: 'typeDetailsCtrl',
            dependencies: ['id']
          })
        .up();
      $routeProvider.otherwise({redirectTo: '/types'});
    }]);
