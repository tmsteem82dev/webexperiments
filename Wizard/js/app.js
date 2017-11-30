// app.js 
// create our angular app and inject ngAnimate and ui-router
angular.module('formApp',['ngAnimate','ui.router'])

// configuring our routes
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    // route to show our basic form (/form)
    .state('form', {
        url: '/form',
        templateUrl: 'form.html',
        controller: 'formController'
    })

    //nested states
    // each of these sections will have their own view
    // url will be nested (/form/profile)
    .state('form.profile', {
        url: '/profile',
        templateUrl: 'form-profile.html'
    })

    // url will be /form/interests
    .state('form.interests', {
        url: '/interests',
        templateUrl: 'form-interests.html'
    })

    // url will be /form/payment
    .state('form.payment', {
        url: '/payment',
        templateUrl: 'form-payment.html '
    })

    $urlRouterProvider.otherwise('/form/profile');

})


// our controller for the form
.controller('formController', function($scope){
    $scope.formData = {};

    //function to process the form
    $scope.processForm = function(){
        console.log('processing form');
    };
});