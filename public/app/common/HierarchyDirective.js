(function() {
    'use strict';

    angular
        .module('app')
        .directive('emHierarchy', hierarchyDirective);

    hierarchyDirective.$inject = ['HierarchyService'];

    function hierarchyDirective(HierarchyService) {
        return {
            restrict: 'E',
            replace: true,
            scope: { data: '=' },
            templateUrl: '/app/common/hierarchy.tpl.html'
        };
    }

}());
