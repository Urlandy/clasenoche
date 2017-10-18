'use strict';

angular.module('javascripApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('areaRectangulo', {
        url: '/areaRectangulo',
        template: '<area-rectangulo></area-rectangulo>'
      });
  });
