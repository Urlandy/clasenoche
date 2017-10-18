'use strict';

describe('Component: AreaTrianguloRectanguloComponent', function () {

  // load the controller's module
  beforeEach(module('javascripApp'));

  var AreaTrianguloRectanguloComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AreaTrianguloRectanguloComponent = $componentController('AreaTrianguloRectanguloComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
