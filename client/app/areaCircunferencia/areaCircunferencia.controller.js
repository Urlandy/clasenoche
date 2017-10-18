'use strict';
(function(){

class AreaCircunferenciaComponent {
  constructor() {
    this.R;
    this.PI;
    this.Area;
  }
  areaCircunferencia(){
    this.Area = Math.PI*Math.pow(this.R,2);
  }
}

angular.module('javascripApp')
  .component('areaCircunferencia', {
    templateUrl: 'app/areaCircunferencia/areaCircunferencia.html',
    controller: AreaCircunferenciaComponent,
    controllerAs: 'vm'
  });

})();
