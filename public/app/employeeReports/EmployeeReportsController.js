(function() {
    'use strict';

    angular.module('app')
        .controller('EmployeeReportsController', ['$scope', '$routeParams', 'Report',
            function($scope, $routeParams, Report) {

                var vm = this;

                vm.employees = Report.query(parseInt($routeParams.employeeId));

                // Employee.query()
                //     .$promise
                //     .then(function(data){
                //         vm.employees = getReports(data, parseInt($routeParams.employeeId));
                //     });
                //
                // function getReports(data, filterBy) {
                //     return data.filter(function(element) {
                //         return element.managerId === filterBy;
                //     })
                // }
            }
        ]);

}());
