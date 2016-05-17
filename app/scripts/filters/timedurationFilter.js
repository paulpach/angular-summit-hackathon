angular.module('hackathonApp')
  .filter('timeDurationFilter', [
    function() {
      'use strict';
      return function(f, t) {
        var to = moment.unix(t);
        var from = moment.unix(f);
        var ms = moment(to).diff(moment(from));
        var d = moment.duration(ms);

        return Math.floor(d.asHours()) + moment.utc(ms).format(':mm');
      };
    }
]);
