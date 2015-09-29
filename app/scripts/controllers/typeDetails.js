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
      vm.details = [{
          "id": "00102dcc-d571-4d9a-868a-8a7c8f42a4a0",
          "typeId": "5",
          "comment": "",
          "from": 1421516014,
          "to": 1421518314,
          "activityId": "5",
          "revision": null,
          "type": null
      }];
      vm.date = new Date();

      vm.getTypeName = function(id) {
        // TODO - FIX THIS!!!
        return "Raju";
      };

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
      };
    }
]);
