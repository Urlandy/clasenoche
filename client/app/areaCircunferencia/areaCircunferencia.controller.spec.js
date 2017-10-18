'use strict';

describe('Component: AreaCircunferenciaComponent', function () {

  // load the controller's module
  beforeEach(module('javascripApp'));

  var AreaCircunferenciaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AreaCircunferenciaComponent = $componentController('AreaCircunferenciaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
