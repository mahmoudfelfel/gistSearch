'use strict';

/**
 * @ngdoc function
 * @name gistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gistApp
 */
angular.module('gistApp')
    .controller('mainCtrl', function($scope, searchService) {
        
        $scope.forksList = [];
        $scope.collapsedView = true;
        $scope.fullView = false;
        
        $scope.searchGists = function() {
            $scope.loading = true;
            searchService.getGists($scope.searchKeyword).then(function(data) {
                $scope.gistList = data;
                $scope.loading = false;
            });
        };

        $scope.getForks = function(gistId){
            searchService.getForks(gistId).then(function(data){
                $scope.forksList[gistId] = data;
            });
        }

        $scope.expandGist = function(gistId){
            $scope.fullView = true;
            $scope.collapsedView = false;

        };

        $scope.collapseGist = function(){
            $scope.fullView = false;
            $scope.collapsedView = true;

        };

    });