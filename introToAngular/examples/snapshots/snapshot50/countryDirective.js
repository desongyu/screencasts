angular.module('countryDirective', [])
       .directive('country', function(){
  return {
   // scope: { country: '=' },   // doesn't have to be private scope, can use scope at the html level that uses this directive
    restrict: 'A',
    templateUrl: 'country.html',
    controller: function($scope, countries){
      countries.find($scope.country.id, function(country) {
        $scope.flagURL = country.flagURL;
      });
    }
  };
});
