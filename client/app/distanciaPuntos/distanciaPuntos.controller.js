'use strict';
(function(){

class DistanciaPuntosComponent {
  constructor() {
    this.x1;
    this.x2;
    this.y1;
    this.y2;
    this.h;
  }
  distanciaPuntos(){
    this.h= Math.sqrt(Math.pow((this.x2 - this.x1),2)+Math.pow((this.y2 - this.y1),2));

  }
}

angular.module('javascripApp')
  .component('distanciaPuntos', {
    templateUrl: 'app/distanciaPuntos/distanciaPuntos.html',
    controller: DistanciaPuntosComponent
  });

})();
