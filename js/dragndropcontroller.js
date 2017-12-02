var app = angular.module("tapp")

app.controller("DragNDropController", function($scope){
    $scope.drag_types = [
        {name: "Blue"},
        {name: "Red"},
        {name: "Green"},
    ]

    $scope.items = [];
    $scope.itemsb = [];

    $scope.handleDragStart = function(e){
        this.style.opacity = '0.4';
        console.log("dragged obj.innerHTML: " + this.innerHTML);
        e.dataTransfer.setData('text/plain', this.innerHTML);
    };

    $scope.handleDragEnd = function(e){
        this.style.opacity = '1.0';
    };

    $scope.handleDrop = function(e){
        e.preventDefault();
        e.stopPropagation();
        areaId = angular.element(this).attr('id');
        console.log("element id: " + areaId);        
        var dataText = e.dataTransfer.getData('text/plain');
        
        
        if(areaId == "a"){
            if($scope.items.indexOf(dataText) !== -1)
            {
                console.log(dataText + " already exists in collection a");
                return;
            }
            $scope.items.push(dataText);
            console.log($scope.items);
        }

        if(areaId == "b"){
            if($scope.itemsb.indexOf(dataText) !== -1)
            {
                console.log(dataText + " already exists in collection b");
                return;
            }
            $scope.itemsb.push(dataText);
            console.log($scope.itemsb);
        }
        
        $scope.$digest();
    };

    $scope.handleDragOver = function(e){
        e.preventDefault(); // Necessary. Allows us to drop.
        e.dataTransfer.dropEffect = 'move'; // See the section on DataTransfer object.
        return false;
    };

    
    $scope.sayHi = function(){
        //alert('Hi!');
        $scope.showDiv = !$scope.showDiv;
    };

    $scope.showDiv = false;
    

    
});