describe('Unit: catListController', function() {

  beforeEach(module('app'));

  var controllerService, scope, httpBackend;
  beforeEach(inject(function($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    controllerService = $controller;
  }));

  describe('getting cats', function() {

    var dummyResponse = [];

    beforeEach(function() {
      httpBackend.expectGET(/.*\.json/).respond(dummyResponse);
      controllerService('catListController', {$scope: scope});
      httpBackend.flush();
    })

    it('should have cats', function() {
      expect(scope.cats).toEqual(dummyResponse);
    });
  });

});











// describe('Unit: MyController', function() {

//   // Load the module with MainController
//   beforeEach(module('myApp'));

//   var ctrl, scope;
//   // inject the $controller and $rootScope services
//   // in the beforeEach block
//   beforeEach(inject(function($controller, $rootScope) {
//     // Create a new scope that's a child of the $rootScope
//     scope = $rootScope.$new();
//     // Create the controller
//     ctrl = $controller('myController', {
//       $scope: scope
//     });
//   }));

//   it('should create $scope.greeting when calling sayHello',
//     function() {
//       expect(scope.greeting).toBeUndefined();
//       scope.sayHello();
//       expect(scope.greeting).toEqual("Hello Ari");
//       expect(scope.greeting).toEqual("Hello Ari");
//   });

// })
