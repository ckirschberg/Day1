var app = angular.module("internship");

app.controller("internshipDataEntryController",
    function($scope, $state, $stateParams) {
        $scope.visit = $stateParams.internship;

        $scope.deleteVisit = function() {

            $scope.visit.$delete({id: $scope.visit._id}).then(function () {
                $scope.internshipVisits.splice($scope.internshipVisits.indexOf($scope.visit), 1);
                $state.go("all-internships");
            });
        };


        $scope.saveVisit = function()
        {
            if ($scope.visitForm.$valid) {
                if (!$stateParams.internship) { //new

                    new $scope.internshipResource($scope.visit).$save(function (internship) {
                        $scope.visit._id = internship._id;

                        $scope.internshipVisits.push($scope.visit);
                        $state.go("all-internships");
                    });
                }
                else //editing
                {
                    //update example
                    new $scope.internshipResource($scope.visit).$update(
                    {id: $scope.visit._id}, function() {
                        $state.go("all-internships");
                    });
                }
            }
            else {
                //display error messages
            }
        };
});