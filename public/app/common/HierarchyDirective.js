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
            scope: {
                data: '=',
                startFrom: '=',
                parentId: '='
            },
            // templateUrl: '/app/employeeOrganogram/organogramTree.tpl.html'
            template:   '<ul class="organogram">'+
                            '<li>'+
                                '<em-member ng-repeat=\'member in data\' member=\'member\'></em-member>'+
                            '</li>'+
                        '</ul>'
        };
    }

}());
