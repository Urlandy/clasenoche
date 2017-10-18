'use strict';

angular.module('javascripApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('distanciaPuntos', {
        url: '/distanciaPuntos',
        template: '<distancia-puntos></distancia-puntos>'
      });
  });
