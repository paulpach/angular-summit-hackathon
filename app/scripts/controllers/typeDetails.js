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

      vm.currentType = typesFactory.getType($routeSegment.$routeParams["id"]);

        /*
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
      */

        vm.details = [];

      vm.date = new Date();

      vm.getTypeName = function(id) {
        return typesFactory.getType(id).name;
      };

      vm.update = function(d) {

          let startOfMonth = moment(d).startOf('month').unix();
          let endOfMonth = moment(d).endOf('month').unix();

          let id = $routeSegment.$routeParams["id"];

          typesFactory.getTypeDetails(id, startOfMonth, endOfMonth).then(function (data) {
              vm.details = data;
          })

        
      };

        vm.update(vm.date);
    }
]);
