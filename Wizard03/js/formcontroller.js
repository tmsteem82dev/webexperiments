var app = angular.module("agbApp");

app.controller("FormController", function ($scope, $http) {
    $scope.title = "this is a test";

    var getCountries = function () {
       return $http.get("http://localhost:8000/countries")
            .then(function (response) {
                return response.data;
            });
    }

    var onSuccess = function(data){
        var jjs = angular.fromJson(data);
        console.log(jjs);
        $scope.countries= data.countries;
    }

    var onError = function(reason){
        console.log(reason);
    }

    getCountries()
    .then(onSuccess,onError);

});
