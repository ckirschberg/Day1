/**
 * Created by christiankirschberg on 17/11/15.
 */

angular.module("internship").factory("internshipsService",
    function($q) {
        //private attributes
        var internships = [];

        //var internshipResource...
        //use the initization of resource (look in controller).




        return {
            test: function() { //illustrate $q service and working with
                //promises.
                var deferred = $q.defer();

                if (number > 2) { //this could be a call to an api.
                    //everything went well
                    deferred.resolve("Everything went well");
                    //could also be an object from the server in the "success" function
                }
                else {
                    //something bad happened
                    deferred.reject("something bad happened");
                }
                return deferred.promise;
            },

            getInternships: function() {
                //not working
                internshipsResource.query(function(dataFromServer) {
                    //when the data comes back from the server.
                    internships = dataFromServer;

                });
                console.log("finished")
            },
            addInternship: function(internship) {
                //call the api to save internship
                //if success, add it to the local array.
            },
            updateInternship: function(internship) {

            },
            deleteInternship: function(internship) {

            }
        }
    });









