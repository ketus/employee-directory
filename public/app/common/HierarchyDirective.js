(function() {
    'use strict';

    angular.module('app').directive('emHierarchy', [function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                data: '=data',
                startFrom: '=',
                parentId: '='
            },
            templateUrl: '/app/employeeOrganogram/organogramTree.tpl.html'
        };
    }])

    .directive('member', ['$compile', 'HierarchyService', function($compile, HierarchyService) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                member: '='
            },
            template: "<li>{{member.firstName}}</li>",
            link: function(scope, element, attrs) {
                var collectionSt = '<em-hierarchy data="member.children"></em-hierarchy>';
                // if (angular.isArray(scope.member.children)) {
                scope.$watch(attrs['data'], function() {
                    $compile(collectionSt)(scope, function(cloned, scope) {
                        element.append(cloned);
                    });
                });

                // }
            }
        };
    }]);

}());
