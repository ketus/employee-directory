(function() {
    'use strict';

    angular.module('app').directive('ngHierarchy', ['HierarchyService', function(HierarchyService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                data: '=data',
                startFrom: '=',
                parentId: '@'
            },
            // templateUrl: 'app/employeeOrganogram/organogramTree.tpl.html'
            template: '<ul><li><member ng-repeat=\'member in data\' member=\'member\'></member></li></ul>',
            link: function(scope, element, attrs) {
                scope.$watchCollection('data', function(val) {
                    return HierarchyService.get(scope.data, scope.startFrom, scope.parentId);
                });
            }
        };
    }])

    .directive('member', function($compile) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                member: '='
            },
            template: "<li>{{member.firstName}}</li>",
            link: function(scope, element, attrs) {
                var collectionSt = '<ng-hierarchy data="member.children"></ng-hierarchy>';
                if (angular.isArray(scope.member.children)) {

                    $compile(collectionSt)(scope, function(cloned, scope) {
                        element.append(cloned);
                    });
                }
            }
        };
    });

}());
