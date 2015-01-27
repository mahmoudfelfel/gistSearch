'use strict';

/**
 * @ngdoc function
 * @name gistApp.filters:unique
 * @description filter to remove duplicates from ng-repeat collection, given the key to filter with
 * @example
 */
angular.module('gistApp')
    .filter('unique', function() {
        return function(collection, keyname) {
            var output = [],
                elements = [];
            angular.forEach(Object.keys(collection), function(item) {
                var element = collection[item][keyname];
                if (elements.indexOf(element) === -1) {
                    elements.push(element);
                    output.push(collection[item]);
                }
            });
            return output;
        };
    });
