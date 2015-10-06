/**
 * Created by christiankirschberg on 29/09/15.
 */

angular.module("internship").controller("topLevelController",
    function($scope, $http) {
        console.log("Hello from top level controller");
        //var dataToSave = ...
        $http(
            {
                method: "GET",
                //url:"/api/internships/getall",
                url:"http://angularkea1.azurewebsites.net/api/internships/getall",
                //data: dataToSave
                //data: $scope.visit
            }).success(function(data) {
                $scope.internshipVisits = data;
            }).error(function() {
                alert("error");
            });

        console.log("Hello there");


    }
);