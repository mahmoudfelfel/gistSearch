'use strict';

/**
 * @ngdoc overview
 * @name gistApp
 * @description
 * # gistAppApp
 *
 * Main module of the application.
 */
angular
  .module('gistApp', [
    'ngAnimate',
    'ui.router',
    'btford.markdown',
    'ngSanitize',
    'ui.codemirror'
  ]);
