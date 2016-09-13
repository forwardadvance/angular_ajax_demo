describe('weatherController', function() {

  beforeEach(module('app'));

  var $controller, $httpBackend;
  beforeEach(inject(function(_$controller_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
  }));

  describe('getting the weather', function() {
    var dummyResponse = [];
    var controller;

    beforeEach(function() {
      $httpBackend.expectJSONP(/.*openweathermap.*/).respond(dummyResponse);
      // $httpBackend.when("JSONP", /.*openweathermap.*/).respond(dummyResponse);
      controller = $controller('WeatherController');
      controller.getFeed();
      $httpBackend.flush();
    });

    it('should have weather', function() {
      expect(controller.weather).toEqual(dummyResponse);
    });
  });
});
