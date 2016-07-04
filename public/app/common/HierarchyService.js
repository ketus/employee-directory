(function() {
    'use strict';

    angular.module('app')
        .factory('HierarchyService', [function() {

            /*
            Recursively create tree structure from array.
            Params:
                collection: list on which to perform search and transformation,
                parentProp: string with a property name describing relationship/reference
                startFrom: object from which to begin creating hierarchy,
                checked: temporary array to hold already processed IDs.
             */
            var getNestedChildren = function(data, startFrom, parentProp, checked) {
                var nestedCollection = [];
                var collection = data.slice(0);
                var firstElement = [];
                startFrom.children = nestedCollection;

                for (var i = 0, j = collection.length; i < j; i++) {

                    // If there's subordinate of selected manager AND it wasn't already processed
                    if (collection[i][parentProp] === startFrom.id && checked.indexOf(parseInt(collection[i].id)) === -1) {

                        // Add manager ID to list of already processed collection
                        checked.push(parseInt(startFrom.id));

                        // Search 1 level deeper if current employee has any children
                        var children = getNestedChildren(collection, collection[i], parentProp, checked);

                        // If current employee has any children, add them as a property
                        if (children.length > 0) {
                            collection[i].children = children;
                        }
                        nestedCollection.push(collection[i]);
                    }
                }

                firstElement.push(startFrom);
                var wholeCollection = firstElement;

                return nestedCollection;

            };

            return {
                get: function(collection, startFrom, parentProp) {
                    return getNestedChildren(collection, startFrom, parentProp, []);
                }

            };

        }]);

}());
