/**
 * Created by Paul on 5/17/16.
 */

angular.module('hackathonApp').filter('dateFormat',
    function() {
        return function(unix_timestamp) {

            return moment.unix(unix_timestamp).format("(YYYY) MMM DD hh:mm a");
        };
    }
);
