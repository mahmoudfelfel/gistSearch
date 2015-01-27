'use strict';

/**
 * @ngdoc function
 * @name gistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gistApp
 */
angular.module('gistApp')
    .controller('gistCtrl', function($scope, searchService, $stateParams, $sce) {
        $scope.loading = true;
        searchService.getGist($stateParams.id).then(function(data) {
            $scope.loading = false;
            $scope.gistData = data;
        });
    });
