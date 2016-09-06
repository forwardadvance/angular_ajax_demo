describe('weatherController', function() {

  beforeEach(module('app'));

  var $controller, scope, $httpBackend;
  beforeEach(inject(function(_$controller_, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
  }));

  describe('getting the weather', function() {

    var dummyResponse = [];

    beforeEach(function() {
      $httpBackend.expectJSONP(/.*openweathermap.*/).respond(dummyResponse);
      // $httpBackend.when("JSONP", /.*openweathermap.*/).respond(dummyResponse);
      $controller('WeatherController', {$scope: scope});
      scope.getFeed();
      // scope.getFeed();
      $httpBackend.flush();
    });

    it('should have weather', function() {
      expect(scope.weather).toEqual(dummyResponse);
    });
  });

});
