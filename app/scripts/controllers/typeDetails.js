'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:TypeDetailsCtrl
 * @description
 * # TypeDetailsCtrl
 * Controller of the hackathonApp
 */
angular.module('hackathonApp')
  .controller('TypeDetailsCtrl', [
    'TypesFactory', '$routeSegment',
    function(typesFactory, $routeSegment) {
      var vm = this;
      vm.details = [];
      vm.date = new Date();

      vm.getTypeName = function(id) {
        return typesFactory.getType(id).name;
      };

      function getTypeDetails(typeId, from, to) {
        typesFactory.getTypeDetails(typeId, from, to)
          .then(function(data) {
            vm.details = data;
          });
      }

      vm.update = function(d) {
        // TODO - FIX THIS!!!
        // HINT
        // Given a date 'd' you can find the start of the month like so
        // moment(d).startOf('month').unix();
        // and end of month like so moment(d).endOf('month').unix();
        //
        // Another HINT
        // Look into typesFactory.getTypeDetails()
        // REMEMBER!! typesFactory.getTypeDetails() returns a PROMISE object
        //
        // Last hint
        // You will need to extract the ID from the URL
        // Look at the documentation for $routeSegment
        // http://angular-route-segment.com/
        vm.date = d;
        var start = moment(d).startOf('month').unix();
        var end = moment(d).endOf('month').unix();
        getTypeDetails($routeSegment.$routeParams.id, start, end);
      };
    }
]);
