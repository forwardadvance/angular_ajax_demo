// * Get request
// * The network tab watches the request
// * The success function receives the data
// * The error function catches the error
// * Karma test with $httpBackend

angular.module('app',[])
  .constant('catUrl', 'cats.json')
  .controller('catListController', function($scope, $http) {
    $scope.loading = true;
    $http.get('/cats.json').success(function(data) {
      $scope.cats = data;
      $scope.loading = false  ;
    });
  });



















// var myApp = angular.module('myApp',[]);

// myApp.controller('demoController', function($scope, $http) {

//
    // $http.get("cats.json")
    //   .success(function(data, status, headers, config) {
    //      $scope.cats = data;
    //  })

    //  .error(function(data, status, headers, config) {
    //     $scope.status = status;
    // });
// });

// Initial state

// angular.module('app', [])
//   .controller('ajaxController', function ($scope) {});

