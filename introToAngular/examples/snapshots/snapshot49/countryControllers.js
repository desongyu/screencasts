var countryControllers = angular.module('countryControllers', []);

countryControllers.controller('CountryListCtrl', function ($scope, countries){  // countries is factory
  countries.list(function(countries) {
    $scope.countries = countries;  // pass countries obtained from the list() to html's scope
  });
});

countryControllers.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
  countries.find($routeParams.countryId, function(country) {
    $scope.country = country;
  });
});
