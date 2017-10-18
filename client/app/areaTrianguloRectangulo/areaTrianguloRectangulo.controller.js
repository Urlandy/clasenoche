'use strict';
(function(){

class AreaTrianguloRectanguloComponent {
  constructor() {
    this.areaT;
    this.a;
    this.b;
    this.c;
    this.areaR;
    this.Area;

  }
  calcular(){
    this.areaT = (this.a-this.c)* this.b/2;
    this.areaR = this.b* this.a;
    this.Area=  this.areaT + this.areaR;
  }
}

angular.module('javascripApp')
  .component('areaTrianguloRectangulo', {
    templateUrl: 'app/areaTrianguloRectangulo/areaTrianguloRectangulo.html',
    controller: AreaTrianguloRectanguloComponent,
    controllerAs: 'vm'
  });

})();
