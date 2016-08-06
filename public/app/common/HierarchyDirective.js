(function() {
    'use strict';

    angular
        .module('app')
        .directive('emHierarchy', hierarchyDirective);

    function hierarchyDirective() {
        return {
            restrict: 'E',
            replace: true,
            scope: { data: '=' },
            templateUrl: '/app/common/hierarchy.tpl.html'
        };
    }

}());
