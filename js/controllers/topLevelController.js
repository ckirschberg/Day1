/**
 * Created by christiankirschberg on 29/09/15.
 */

angular.module("internship").controller("topLevelController",
    ["$scope", "$http", "$resource", 'testService', 'logService', '$log',
        function($scope, $http, $resource, testService, logService, $log) {


        $scope.products = [
                {name: "Apples", category: "Fruit" , price: 1.2 },
                {name: "Oranges", category: "Fruit" , price: 2.2 },
                {name: "Pineapple", category: "Fruit" , price: 1.6 }

        ];

        var obj = {name: "Per"};
        $log.debug("Hello from Angulars log service", obj);

                //not work
        //$scope.allInternships = testService.getInternships();

        testService.addToNumber(5);
        //I can add .then(....) is that test() returns a promise
        testService.test().then(function(data) {
                //when promise is resolved
                alert(data);
                $scope.internships = data;
        }, function(reason) {
                //if promise is rejected
                alert(reason);
        });

        //internshipsService.getInternships().then(function(data) {
        //        $scope.internships = data;
        //}, function(error) {
        //        //handle error (eg. network is down).
        //});

        //console.log("Hello from top level controller");

        //console.log("Text here: ", $scope.internship);
        logService.log("Test text with no object...");


        logService.log("Text here: ", obj);

        testService.addToNumber(4);
        //console.log("Number from testService: " + testService.get());

        $scope.internshipResource =
$resource("http://angularkea.azurewebsites.net/api/internships/:id",
        { id: "@id"},{ update: { method: 'PUT' }});


        //$scope.internshipVisits = $scope.internshipResource.query();

        $scope.internshipResource.query(function(data) {
                //success
        }, function(reason) {
                //failure
        });

        //var dataToSave = ...
        /*
        $http(
            {
                method: "GET",
                //url:"/api/internships/getall",
                url:"http://angularkea1.azurewebsites.net/api/internships/update" + $stateParams.internship._id,
                //data: dataToSave
                data: $scope.visit
            }).success(function(data) {
                $scope.internshipVisits = data;
            }).error(function() {
                alert("error");
            });
        */
        console.log("Hello there");


    }
]);