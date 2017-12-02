var app = angular.module("tapp");

app.controller("MainController",function($scope){
    $scope.title ="Testing drag and drop:";

    $scope.texts= [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    $scope.trendsSelected = true;
    $scope.companySelected = false;

    $scope.selectTrends = function(){
        $scope.trendsSelected = true;
        $scope.companySelected = false;
    };

    $scope.selectCompany = function(){
        $scope.trendsSelected = false;
        $scope.companySelected = true;
    };
});