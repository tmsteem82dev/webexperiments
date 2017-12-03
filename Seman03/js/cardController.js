var app = angular.module("smApp");

app.controller("CardController", function($scope){
    $scope.cardData = [
        {name: "Timmy", email:"tim@timmer.tims", image:"matthew.png", date:"2011",description:"Timmy is a tim from tim land."},
        {name: "Robin", email:"robs@robinio.robo", image:"kristy.png", date:"2013", description: "Robin is an archeologist searching for answers."},
        {name: "Xlypt", email:"harry@gmail.com", image: "elyse.png",date:"1990", description: "Hi how are you today I am bllbrjnvuidhruihrivuhdihis."},
        {name: "Steve", email:"steve@apple.com", image: "steve.jpg",date:"1900", description: "Inventor of the magnificent zune!?"},
        {name: "Daniel", email:"dan@gmail.com", image: "daniel.jpg",date:"1991", description: "Hi plonk is what he is. Or something."},
        {name: "Helen", email:"hy@gmail.com", image: "helen.jpg",date:"1941", description: "I like to go vroom vrrom in my car."},
        {name: "Elliot", email:"phone@home.com", image: "elliot.jpg",date:"1991", description: "I'm helping my E.T. phone to his or her home right now."}
    ]

    $scope.imgRoot = "./images";

    

});