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
                data: '='
            },
            // link: hierarchyLink,
            // templateUrl: '/app/employeeOrganogram/organogramTree.tpl.html'
            template:   '<ul class="organogram">' +
                            '<li>' +
                                '<em-member ng-repeat=\'member in data\' member=\'member\'></em-member>' +
                            '</li>' +
                        '</ul>'
        };

        // function hierarchyLink($scope, $element, $attrs) {
        //     $scope.$watch('data', function(value) {
        //         if (value) {
        //             if (!angular.isArray($scope.collection)) {
        //                 $scope.collection = HierarchyService.get($scope.data, $scope.startFrom, $scope.parentId);
        //             }
        //
        //         }
        //     });
        // }
    }
}());
