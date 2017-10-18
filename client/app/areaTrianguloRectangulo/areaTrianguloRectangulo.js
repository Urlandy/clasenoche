'use strict';

angular.module('javascripApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('areaTrianguloRectangulo', {
        url: '/areaTrianguloRectangulo',
        template: '<area-triangulo-rectangulo></area-triangulo-rectangulo>'
      });
  });
