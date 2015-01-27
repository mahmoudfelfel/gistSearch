angular.module('ui.router')
    .config(
        ['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                    .state('home', {
                        // abstract: true,
                        url: '/home',
                        templateUrl: './views/main.html',
                        controller: 'mainCtrl'
                    })
                    .state('home.gist', {
                        url: '/gist/:id',
                        templateUrl: './views/gistDetails.html',
                        controller: 'gistCtrl'
                    })

                $urlRouterProvider.when('', '/home');
                var isHtml5 = $locationProvider.html5Mode();
                if (angular.isObject(isHtml5)) {
                  isHtml5 = isHtml5.enabled;
                }
            }

        ]);