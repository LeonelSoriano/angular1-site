'use strict';

describe('Directive: simpleLoader', function () {

  // load the directive's module
  beforeEach(module('angular1SiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<simple-loader></simple-loader>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the simpleLoader directive');
  }));
});
