/**
 * Created by christiankirschberg on 17/11/15.
 */

angular.module("internship").factory("logService", function() {
    //private attributes
    var debug = false;

    return {
        //public (when we use the logService)
        log: function(text, object) {

            if (debug) {
                console.log(text);

                if (angular.isObject(object)) {

                    console.log(object);
                }
            }
        }


    }
});