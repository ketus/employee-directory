(function() {
    'use strict';

    angular
        .module('app')
        .controller('EmployeeList', EmployeeList);

    EmployeeList.$inject = ['$scope', 'Employee'];

    function EmployeeList($scope, Employee) {
        var vm = this;
        vm.employees = Employee.query();
    }
}());
