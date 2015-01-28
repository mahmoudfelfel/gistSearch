(function(angular) {
    'use strict';

    angular.module('gistApp').service('searchService', function($q, $http) {

        var getGists = function getGists(keyword) {
            var deferred = $q.defer();
            // the https://bitpickio.herokuapp.com/ is a simple node proxy to handle the cros-origin issue, i built it before for another project and reusing it here
            $http({
                url: "https://bitpickio.herokuapp.com/https://api.github.com/users/" + keyword + "/gists",
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).
            success(function(data) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject({
                    message: "Error!"
                });
            });
            return deferred.promise;
        };

        var getForks = function getForks(gistId) {
            var deferred = $q.defer();
            // the https://bitpickio.herokuapp.com/ is a simple node proxy to handle the cros-origin issue, i built it before for another project and reusing it here
            $http({
                url: "https://bitpickio.herokuapp.com/https://api.github.com/gists/" + gistId + "/forks",
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).
            success(function(data) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject({
                    message: "Error!"
                });
            });
            return deferred.promise;
        };

        var getGist = function getForks(gistId) {
            var deferred = $q.defer();
            // the https://bitpickio.herokuapp.com/ is a simple node proxy to handle the cros-origin issue, i built it before for another project and reusing it here
            $http({
                url: "https://bitpickio.herokuapp.com/https://api.github.com/gists/" + gistId,
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).
            success(function(data) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject({
                    message: "Error!"
                });
            });
            return deferred.promise;
        };

        var getSearchCompeletions = function getForks(userName) {
            var deferred = $q.defer();
            // the https://bitpickio.herokuapp.com/ is a simple node proxy to handle the cros-origin issue, i built it before for another project and reusing it here
            $http({
                url: "https://bitpickio.herokuapp.com/https://api.github.com/search/users?q=" + userName,
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).
            success(function(data) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject({
                    message: "Error!"
                });
            });
            return deferred.promise;
        };


        return {
            getGists: getGists,
            getForks: getForks,
            getGist: getGist,
            getSearchCompeletions: getSearchCompeletions
        };
    });
})(window.angular);
