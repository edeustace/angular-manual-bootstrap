angular.module('my-dependency', []).controller('Root', ['$scope', function($scope){
  console.log("Root controller created");
  $scope.sayHello = function(){ return "hello"};
}]);

angular.module('my-dependency').directive('helloWorld', [function(){

  var link = function($scope, $elem, $attrs){
    console.log("Hi!");
  }
  return {
    restrict: 'E',
    template: "<h4>Hello World Directive</h4>",
    replace: true,
    link: link
  }
}]);