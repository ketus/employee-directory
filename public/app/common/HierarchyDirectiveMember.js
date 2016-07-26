(function() {
    'use strict';

    angular
        .module('app')
        .directive('emMember', member);

    member.$inject = ['$compile'];

    function member($compile) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                member: '='
            },
            // templateUrl: '/app/employeeOrganogram/organogramTree.tpl.html'
            template: '<ul><li><img ng-src="/assets/photos/{{member.picture}}" title="{{member.firstName}} {{member.lastName}}" class="employee-avatar"></li></ul>',
            link: function(scope, element, attrs) {
                var collectionSt = '<em-hierarchy data="member.children"></em-hierarchy>';
                if (angular.isArray(scope.member.children)) {

                    $compile(collectionSt)(scope, function(cloned, scope) {
                        element.append(cloned);
                    });

                }
            }
        };
    }

}());
