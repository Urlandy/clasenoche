'use strict';

describe('Component: AreaConoComponent', function () {

  // load the controller's module
  beforeEach(module('javascripApp'));

  var AreaConoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AreaConoComponent = $componentController('AreaConoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
