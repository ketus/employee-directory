(function() {
    'use strict';

    angular.module('app').directive('ngHierarchy', ['HierarchyService', function(HierarchyService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                data: '=data'
            },
            templateUrl: '/app/employeeOrganogram/organogramTree.tpl.html'
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
