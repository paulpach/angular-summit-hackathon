'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:TypesCtrl
 * @description
 * # TypesCtrl
 * Controller of the hackathonApp
 */
angular.module('hackathonApp')
  .controller('TypesCtrl', [
    'TypesFactory', '$routeSegment',
    function(typesFactory, $routeSegment) {
      var vm = this;

      if ($routeSegment.$routeParams.id) {
        vm.currentType = typesFactory.getType($routeSegment.$routeParams.id);
      }

      typesFactory.getTypes()
        .then(function(types) {
          vm.types = types;
        }, function(err) {
          vm.errMsg = err;
        });

      vm.setSelectedType = function(t) {
        vm.currentType = t;
      };
    }
  ]);
