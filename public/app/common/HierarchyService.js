(function() {
    'use strict';

    angular
        .module('app')
        .factory('hierarchyService', hierarchyService);

    function hierarchyService() {

        return {
            get: getHierarchy
        };

        function getHierarchy(collection, startFrom, parentProperty) {

            var rootElement = [];
            rootElement.push(getRootElement(collection, startFrom));
            rootElement[0].children = getNestedChildren(collection, startFrom, parentProperty, []);

            return rootElement;
        }

        function getRootElement(collection, id) {
            return _.find(collection, function(obj) {
                return obj.id === id;
            });
        }

        // Recursively create tree structure from array.
        // Params:
        //     collection: list on which to perform search and transformation,
        //     parentProperty: string with a property name describing relationship/reference
        //     startFrom: object from which to begin creating hierarchy,
        //     checked: temporary array to hold already processed IDs.
        function getNestedChildren(data, startFrom, parentProperty, checked) {

            var nestedCollection = [];
            var collection = data.slice(0);

            for (var i = 0, j = collection.length; i < j; i++) {

                if (collection[i][parentProperty] === startFrom &&
                    checked.indexOf(parseInt(collection[i].id)) === -1) {

                    checked.push(parseInt(startFrom));

                    var children = getNestedChildren(collection, parseInt(collection[i].id), parentProperty, checked);

                    if (children.length > 0) {
                        collection[i].children = children;
                    } else {
                        collection[i].children = [];
                    }

                    nestedCollection.push(collection[i]);
                }
            }

            return nestedCollection;
        }

    }

}());
