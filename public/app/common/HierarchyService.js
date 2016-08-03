(function() {
    'use strict';

    angular
        .module('app')
        .factory('HierarchyService', hierarchyService);

        hierarchyService.$inject = ["$rootScope"];

        function hierarchyService() {

            return {
                get: getHierarchy
            };

            function getHierarchy(collection, startFrom, parentProperty) {
                return getNestedChildren(collection, startFrom, parentProperty, []);
            }

            /* Recursively create tree structure from array.
            Params:
                collection: list on which to perform search and transformation,
                parentProperty: string with a property name describing relationship/reference
                startFrom: object from which to begin creating hierarchy,
                checked: temporary array to hold already processed IDs.
             */
            function getNestedChildren(data, startFrom, parentProperty, checked) {
                var nestedCollection = [];
                var collection = data.slice(0);

                for (var i = 0, j = collection.length; i < j; i++) {

                    // If there's subordinate of selected manager AND it wasn't already processed
                    if (collection[i][parentProperty] === startFrom && checked.indexOf(parseInt(collection[i].id)) === -1) {

                        // Add manager ID to list of already processed collection
                        checked.push(parseInt(startFrom));

                        // Search 1 level deeper if current employee has any children
                        var children = getNestedChildren(collection, parseInt(collection[i].id), parentProperty, checked);

                        // If current employee has any children, add them as a property
                        if (children.length > 0) {
                            collection[i].children = children;
                        } 
                        nestedCollection.push(collection[i]);
                    }
                }

                return nestedCollection;
            }
        }

}());
