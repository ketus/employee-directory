(function() {
    'use strict';

    angular
        .module('app')
        .controller('EmployeeReports', EmployeeReports);

    EmployeeReports.$inject = ['$scope', '$routeParams', 'Employee'];

    function EmployeeReports($scope, $routeParams, Employee) {

        var vm = this;
        vm.employees = Employee.getReports({
            id: parseInt($routeParams.employeeId)
        });

    }

}());
