'use strict';
(function(){

class AreaConoComponent {
  constructor() {
    this.R;
    this.H;
    this.C;
    this.AT;
    this.AC;
    this.SAC;
    this.PI;
    this.Area;
  }
  areaCono(){
    this.C= Math.sqrt(Math.pow(this.H,2) - Math.pow(this.R,2));
    this.AT=2*(this.R*this.C)/2;
    this.AC= Math.PI*(Math.pow(this.R,2));
    this.SAC= this.AC/2;
    this.Area=this.AT + this.SAC;
}
}

angular.module('javascripApp')
  .component('areaCono', {
    templateUrl: 'app/areaCono/areaCono.html',
    controller: AreaConoComponent,
    controllerAs: 'vm'
  });

})();
