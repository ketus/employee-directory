(function() {
    'use strict';

    angular
        .module('app')
        .controller('EmployeeDetails', EmployeeDetails);

    EmployeeDetails.$inject = ['$scope', '$routeParams', 'Employee'];

    function EmployeeDetails($scope, $routeParams, Employee) {
        var vm = this;
        vm.employee = Employee.get({
            id: $routeParams.employeeId
        });
    }

}());
