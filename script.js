var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        // Create a model
        var technologies = [
            { name: "C#", likes: 0, dislikes: 0 },
            { name: "ASP.NET", likes: 0, dislikes: 0 },
            { name: "SQL Server", likes: 0, dislikes: 0 },
            { name: "AngularJS", likes: 0, dislikes: 0 }
        ];
        // Attach the model to the scope
        $scope.technologies = technologies;
        // Attach a method to the scope
        $scope.incrementLikes = function(technology) {
            technology.likes++;
        };
        // Attach a method to the scope
        $scope.incrementDislikes = function(technology) {
            technology.dislikes++;
        };
    });
