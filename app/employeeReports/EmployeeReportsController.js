(function () {
    'use strict';

    angular.module('app')
        .controller('EmployeeReportsController', ['$scope', '$routeParams', 'Report',
            function ($scope, $routeParams, Report) {

                $scope.employees = Report.query({employeeId: $routeParams.employeeId});
            }]);

}());
