// (function() {
//     'use strict';
//
//     angular.module('app').factory('Report', ['Employee',
//         function(Employee) {
//
//             var query = function(id) {
//                 return Employee.query({}, function(data) {
//                     return findByManager(data, id);
//                 });
//             };
//
//
//             var findByManager = function(employees, employeeId) {
//                 return employees.filter(function(element) {
//                     return employeeId === element.managerId;
//                 });
//
//             };
//
//             return {
//                 query: query,
//                 // function(employee) {
//                 // return query(parseInt(employee.employeeId), findByManager);
//                 // },
//                 findByManager: findByManager
//             };
//
//         }
//     ]);
//
// }());


describe('Reports factory', function() {

    var reports;

    beforeEach(module('app'));
    beforeEach(inject(function(Report) {
        reports = Report;
    }));

    it('should exist', function() {
        expect(reports).toBeDefined();
    });


});
