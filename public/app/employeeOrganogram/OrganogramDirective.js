(function () {
    'use strict';

    angular.module('app').directive('organogram', [function () {

        return {
            restrict: 'E',
            templateUrl: 'app/employeeOrganogram/organogramTree.tpl.html'
        };

    }]);
}());
