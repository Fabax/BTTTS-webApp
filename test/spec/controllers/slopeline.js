'use strict';

describe('Controller: SlopelinectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('btttsWebappApp'));

  var SlopelinectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlopelinectrlCtrl = $controller('SlopelinectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
