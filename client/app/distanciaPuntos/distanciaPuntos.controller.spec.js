'use strict';

describe('Component: DistanciaPuntosComponent', function () {

  // load the controller's module
  beforeEach(module('javascripApp'));

  var DistanciaPuntosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DistanciaPuntosComponent = $componentController('DistanciaPuntosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
