/**
 * Created by christiankirschberg on 29/09/15.
 */

angular.module("internship").
    controller("allInternshipsController",
    function($scope, $state) {
        console.log("hi from all internships");


        $scope.editInternship = function(visit) {
          $state.go("new-internship",
              {internship: visit});
        };
});