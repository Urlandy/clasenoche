'use strict';
(function(){

class AreaRectanguloComponent {
  constructor() {
    this.A;
    this.B;
    this.areaRectangulo;

  }
  areaRectangulo(){
    this.areaRectangulo = this.A * this.B;
  }
}

angular.module('javascripApp')
  .component('areaRectangulo', {
    templateUrl: 'app/areaRectangulo/areaRectangulo.html',
    controller: AreaRectanguloComponent,
    controllerAs: 'vm'
  });

})();
