angular.module('hackathonApp')
  .factory('TypesFactory', [
    '$http', '$q',
    function($http, $q) {
      'use strict';
      var types,
        lookup = {};

      function getTypes() {
        var deferred = $q.defer();
        if (types) {
          deferred.resolve(types);
        } else {
          $http.get('/api/types')
            .then(handleSuccess, handleError)
            .then(function(returnedTypes) {
              types = returnedTypes;
              for (var i = 0, len = types.length; i < len; i++) {
                lookup[types[i].id] = types[i];
              }
              deferred.resolve(types);
            });
        }
        return deferred.promise;
      }

      function getType(id) {
        return lookup[id];
      }

      function getTypeDetails(id, start, end) {
        return $http.get('/api/details')
          .then(handleSuccess, handleError)
          .then(function(data) {
            return data.filter(function(item) {
              return item.typeId === id && item.from >= start && item.to <= end;
            }).sort(function(a, b) {
              return a.from - b.from;
            });
          });
      }

      function handleSuccess(response) {
        return response.data;
      }

      function handleError(response) {
        if (!angular.isObject(response.data) && !response.data) {
          return ($q.reject('An unknown error occurred.'));
        }
        return ($q.reject(response.data));
      }

      return {
        getTypes: getTypes,
        getType: getType,
        getTypeDetails: getTypeDetails
      };
    }
  ]);
