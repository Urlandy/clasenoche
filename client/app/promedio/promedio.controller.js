'use strict';
(function(){

class PromedioComponent {
  constructor() {
  this.nota1;
  this.nota2;
  this.nota3;
  this.nota4;
  this.promedio;
  }
  Promedio(){
    this.promedio = (this.nota1 + this.nota2 +this.nota3 + this.nota4)/4;
  }
}

angular.module('javascripApp')
  .component('promedio', {
    templateUrl: 'app/promedio/promedio.html',
    controller: PromedioComponent,
    controllerAs: 'vm'
  });

})();
