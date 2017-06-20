'use strict';

describe('Directive: myTableEdit', function () {

  // load the directive's module
  beforeEach(module('angular1SiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-table-edit></my-table-edit>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myTableEdit directive');
  }));
});
