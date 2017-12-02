var app = angular.module('wizApp');

app.controller("formController", function($scope){
    $scope.formData = {};

    $scope.processForm = function(){
        console.log('processing form');

    };
});