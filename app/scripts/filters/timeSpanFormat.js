/**
 * Created by Paul on 5/17/16.
 */


angular.module('hackathonApp').filter('timeSpanFormat',
    function() {
        return function(diff) {

            return moment.unix(diff).utc().format("h:mm");
        };
    }
);
