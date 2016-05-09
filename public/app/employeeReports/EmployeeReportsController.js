(function() {
    'use strict';

    angular.module('app')
        .controller('EmployeeReportsController', ['$scope', '$routeParams', 'Employee', 'Report',
            function($scope, $routeParams, Employee, Report) {

                // Employee.query({}, function(employees) {
                //
                //     var id = parseInt($routeParams.employeeId);
                //     $scope.employees = Report.findByManager(employees, id);
                //
                // });
                var id = parseInt($routeParams.employeeId);
                $scope.employees = Report.query(id);

            }
        ]);

}());
