/**
 * @ngdoc filter
 * @name atimeloggerApp.filter:timeRangeFilter
 * @function
 * @description
 * # timeRangeFilter
 * Filter in the atimeloggerApp.
 */
angular.module('hackathonApp')
  .filter('timeRangeFilter', [
    function () {
      'use strict';
      return function (ts) {
        //03:04 pm
        return moment.unix(ts).format('(YYYY) MMM DD hh:mm a');
      };
    }
  ]);
