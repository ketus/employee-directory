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
            templateUrl: '/app/common/hierarchyMember.tpl.html',
            link: function(scope, element, attrs) {
                var collection = '<em-hierarchy data="member.children track by member.id"></em-hierarchy>';
                if (angular.isArray(scope.member.children)) {

                    $compile(collection)(scope, function(cloned, scope) {
                        element.append(cloned);
                    });

                }
            }
        };
    }

}());
