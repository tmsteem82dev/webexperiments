var app = angular.module("smApp");

app.controller("FilterController", function($scope){
    $scope.filters = ["People","Email","Number","Name","Join date","Money","Play dough","Hairs"];
});