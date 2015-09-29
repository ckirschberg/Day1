/**
 * Created by christiankirschberg on 29/09/15.
 */

angular.module("internship").controller("topLevelController",
    function($scope) {
        console.log("Hello from top level controller");

        $scope.internshipVisits = [];
    }
);