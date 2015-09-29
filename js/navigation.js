/**
 * Created by christiankirschberg on 29/09/15.
 */

angular.module("internship").config(
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("all-internships");


        $stateProvider.state("all-internships", {
            url: "/all-internships",
            templateUrl: "partials/all-internships.html",
            controller: "allInternshipsController"
        })
            .state("all-internships.subview1", {
                url: "/subview1",
                templateUrl: "partials/subview1.html"
            })
            .state("all-internships.subview2", {
                url: "/subview2",
                templateUrl: "partials/subview2.html"
            });

        $stateProvider.state("new-internship", {
            url: "/new-internship",
            templateUrl: "partials/form-input.html",
            controller: "internshipDataEntryController",
            params: { internship: null } //passing a variable
        });
});