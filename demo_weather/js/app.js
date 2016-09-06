
// * What is JSONP
// * Broken into separate module
// * JSONP request
// * Debugger lets us open up the data object
// * We can $watch a value in scope
// * ng-model-options lets us debounce
// * spinner

// var x = function() {
//   return 'toast'
// }

// var x = () => 'toast'


angular.module('app', ['weather']);

(function() {
  function makeUrl(base, key, loc) {
    return [
      base,
      "weather?q=",
      loc,
      "&APPID=",
      key,
      "&callback=JSON_CALLBACK"
    ].join('');
  }

  angular.module('weather', [])
    .controller('WeatherController', function ($scope, $http, openWeatherConstants) {
      $scope.loc = "london";

      $scope.getFeed = (loc) => {
        var url = makeUrl(
          openWeatherConstants.base,
          openWeatherConstants.key,
          loc
        );
        $http.jsonp(url)
          .then((res) => res.data)
          .then((weather) => $scope.weather = weather)
      };
      // $scope.$watch('loc', $scope.getFeed)
    })
    .value('openWeatherConstants', {
      key:"57d36da6b8187a992393dc6a0f4c96c3",
      base:"http://api.openweathermap.org/data/2.5/"
    });
})()












  // angular.module('weather', [])
  //   .controller('WeatherController', function ($scope, weather) {

  //     $scope.loc = "london";

  //     $scope.getFeed = (loc) => {
  //       $scope.spinner = true;
  //       weather.get(loc)
  //         .then((data) => $scope.weather = data)
  //         .then(() => $scope.spinner = false);
  //     }
  //   })
  //   .service('weather', function($http, weatherBase, weatherApiKey) {
  //     this.get = (loc) => {
  //       var url = makeUrl(weatherBase, weatherApiKey, loc);
  //       return $http.jsonp(url)
  //         .then((res) => res.data);
  //     }
  //   })
  //   .constant('weatherBase', 'http://api.openweathermap.org/data/2.5/')
  //   .constant('weatherApiKey', '57d36da6b8187a992393dc6a0f4c96c3');


  // http://api.openweathermap.org/data/2.5/weather?q=london&APPID=57d36da6b8187a992393dc6a0f4c96c3&callback=JSON_CALLBACK

  //   function makeUrl(base, key, loc) {
  //     return [
  //       base,
  //       "weather?q=",
  //       loc,
  //       "&APPID=",
  //       key,
  //       "&callback=JSON_CALLBACK"
  //     ].join('');
  //   }

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















  // $.ajax({url: url, method: 'GET'})
  //   .then( () => {

  //   })
  //   .then( () => {

  //   })
  //   .catch( () => {

  //   })



  // var promise1 = new Promise((resolve) => {
  //   setTimeout(resolve, 1000)
  // })

  // var promise2 = new Promise((resolve) => {
  //   setTimeout(resolve, 2000)
  // })

  // Promise.all([promise1, promise2])
  //   .then(() => console.log('done99'));

  // console.log('outside promise');


  // var x = promise
  //   .then(() => {throw new Exception()})
  //   .then(() => console.log('done2'))
  //   .catch(() => console.log('error!!!'))
  //   .then(() => console.log('done3'))

  // x.then(() => console.log(x))





  // Initial state

  // angular.module('app', ['weather']);

  // angular.module('weather', [])
  //   .controller('WeatherController', function ($scope, $http) {

  //     $scope.loc = "london";

  //     // $scope.getFeed = function() {};
  //   });
