// * What is JSONP
// * Broken into separate module
// * JSONP request
// * Debugger lets us open up the data object
// * We can $watch a value in scope
// * ng-model-options lets us debounce
// * spinner

angular.module('app', ['weather']);

angular.module('weather', [])
  .controller('WeatherController', function ($scope, $http) {

    $scope.loc = "london";
    // $scope.getFeed = function() {};

  });



  // function makeUrl(base, key, loc) {
  //   return [
  //     base,
  //     "weather?q=",
  //     loc,
  //     "&APPID=",
  //     key,
  //     "&callback=JSON_CALLBACK"
  //   ].join('');
  // }

// (function() {
//   var base = 'http://api.openweathermap.org/data/2.5/';
//   var key = '57d36da6b8187a992393dc6a0f4c96c3';

//   angular.module('constants', [])
//     .constant('weatherConstants', {
//       base: base,
//       key: key
//     })
// })();













  // function makeUrl(base, key, loc) {
  //   return [
  //     base,
  //     "weather?q=",
  //     loc,
  //     "&APPID=",
  //     key,
  //     "&callback=JSON_CALLBACK"
  //   ].join('');
  // }

// http://api.openweathermap.org/data/2.5/weather?q=london&APPID=57d36da6b8187a992393dc6a0f4c96c3&callback=JSON_CALLBACK




















// Initial state

// angular.module('app', ['weather']);

// angular.module('weather', [])
//   .controller('WeatherController', function ($scope, $http) {

//     $scope.loc = "london";

//     // $scope.getFeed = function() {};
//   });
