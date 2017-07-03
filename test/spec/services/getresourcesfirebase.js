'use strict';

describe('Service: getResourcesFireBase', function () {

  // load the service's module
  beforeEach(module('angular1SiteApp'));

  // instantiate service
  var getResourcesFireBase;
  beforeEach(inject(function (_getResourcesFireBase_) {
    getResourcesFireBase = _getResourcesFireBase_;
  }));

  it('should do something', function () {
    expect(!!getResourcesFireBase).toBe(true);
  });

});
