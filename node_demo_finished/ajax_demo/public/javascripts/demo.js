var myApp = angular.module('myApp', []);

myApp.controller('DemoController', function ($scope, $http) {
  $http.get('users').success(function(data) {
    $scope.users = data;
  });
});










// * do a get request
// * show the network tab
// * show the success function
// * show the failure function












// var myApp = angular.module('myApp',[]);

// myApp.controller('DemoController', function($scope, $http) {

//   $http.get("data.json")
//     .success(function(data, status, headers, config) {
//        $scope.data = data;
//    })

//    .error(function(data, status, headers, config) {
//       $scope.status = status;
//   });
// });

