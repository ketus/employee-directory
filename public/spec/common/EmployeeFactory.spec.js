describe('Employee factory', function() {

    var $httpBackend,
        mockEmployee;
    beforeEach(module('app'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        mockEmployee = $injector.get('Employee');
    }));



    it('should make GET request for one employee object.', function() {
        //expect(mockEmployee.get).toBeDefined();

        $httpBackend.expectGET('/api/employees/1')
            .respond({
                firstName: 'Charles Montgomery',
                lastName: 'Burns'
            });

        var result = mockEmployee.get({
            id: 1
        });

        $httpBackend.flush();
        expect(result.firstName).toEqual('Charles Montgomery');
    });

    it('should make GET request for array of employee objects.', function() {
        expect(mockEmployee.get).toBeDefined();

        $httpBackend.expectGET('/api/employees')
            .respond([{
                firstName: 'Charles Montgomery',
                lastName: 'Burns'
            }, {
                firstName: 'Charles Montgomery',
                lastName: 'Burns'
            }, {
                firstName: 'Charles Montgomery',
                lastName: 'Burns'
            }, {
                firstName: 'Charles Montgomery',
                lastName: 'Burns'
            }]);

        var result = mockEmployee.query();
        //expect(result).toEqual(jasmine.any(Function).$promise);
        $httpBackend.flush();
        expect(result).toBe(Array);
    });

});
