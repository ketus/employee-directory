(function() {
    'use strict';

    angular.module('app')
        .factory('HierarchyService', [function() {

            /*
            Recursively create tree structure from array.
            Params:
                collection: list on which to perform search and transformation,
                parentProp: string with a property name describing relationship/reference
                startId: id of an element from which to begin hierarchy,
                checked: temporary array to hold already processed IDs.
             */
            var getNestedChildren = function(data, startId, parentProp, checked) {
                var nestedCollection = [];
                var collection = data.slice(0);

                for (var i = 0, j = collection.length; i < j; i++) {

                    // If there's subordinate of selected manager AND it wasn't already processed
                    if (collection[i][parentProp] === startId && checked.indexOf(parseInt(collection[i].id)) === -1) {

                        // Add manager ID to list of already processed collection
                        checked.push(startId);

                        // Search 1 level deeper if current employee has any children
                        var children = getNestedChildren(collection, parseInt(collection[i].id), parentProp, checked);

                        // If current employee has any children, add them as a property
                        if (children.length > 0) {
                            collection[i].children = children;
                        }
                        nestedCollection.push(collection[i]);
                    }
                }
                return nestedCollection;
            };

            return {
                get: function(collection, startId, parentProp) {
                    return getNestedChildren(collection, startId, parentProp, []);
                }

            };

        }]);

}());
