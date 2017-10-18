'use strict';

angular.module('javascripApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('promedio', {
        url: '/promedio',
        template: '<promedio></promedio>'
      });
  });
