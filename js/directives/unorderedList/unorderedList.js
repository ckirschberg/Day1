angular.module("internship")
    .directive("unorderedList", function() {

       return {
        link: function(scope, element, attrs) {
                var data = scope[attrs["unorderedList"]];
                var propertyName = attrs["listProperty"];
               //Will get me "name" (what I wrote in html).
                scope.data = data;

                for (var i=0; i < data.length; i++) {
                    console.log(data[i][propertyName]);
                }
            },
           templateUrl: 'js/directives/unorderedList/tableTemplate.html'
        }


    });