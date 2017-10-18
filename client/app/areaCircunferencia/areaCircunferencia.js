'use strict';

angular.module('javascripApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('areaCircunferencia', {
        url: '/areaCircunferencia',
        template: '<area-circunferencia></area-circunferencia>'
      });
  });
