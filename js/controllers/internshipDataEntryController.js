var app = angular.module("internship");

app.controller("internshipDataEntryController",
    function($scope, $state, $stateParams) {
        $scope.visit = $stateParams.internship;

        console.log($stateParams.internship);

        $scope.saveVisit = function()
        {
            if ($scope.visitForm.$valid) {

                //if () { //new

                //http

                $scope.visit.id = $scope.$parent.internshipVisits.length +1;

                $scope.$parent.
                    internshipVisits.push($scope.visit);
                //}
                //else //editing
                //{
                    // updates the existing object in the array.

                //}
                $state.go("all-internships");

            }
            else {
                //display error messages
            }

        };
});