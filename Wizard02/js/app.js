var app = angular.module("wizApp",['ngAnimate','ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('form', {
        url: '/form',
        templateUrl: 'form.html',
        controller: 'formController'
    });

    $stateProvider.state('form.profile', {
        url: '/profile',
        templateUrl: 'form-profile.html'
    });

    $stateProvider.state('form.interests', {
        url: '/interests',
        templateUrl: 'form-interests.html'
    });

    $stateProvider.state('form.donate',{
        url: '/donate',
        templateUrl: 'form-donate.html'
    });

    $urlRouterProvider.otherwise('/form/profile');
});

