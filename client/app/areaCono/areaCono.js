'use strict';

angular.module('javascripApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('areaCono', {
        url: '/areaCono',
        template: '<area-cono></area-cono>'
      });
  });
