describe('Employee factory', function() {

    var $httpBackend,
        mockEmployee;

    beforeEach(module('app'));
    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        mockEmployee = $injector.get('Employee');
    }));

    it('should make GET request for one employee object.', function() {

        $httpBackend.expectGET('/api/employees/1')
            .respond(200, {
                firstName: 'Charles Montgomery',
                lastName: 'Burns'
            });

        mockEmployee.get({ id: 1 })
            .$promise
            .then(function(result){
                $httpBackend.flush();
                expect(mockEmployee.get).toBeDefined();
                expect(result.firstName).toEqual('Charles Montgomery');
            });

    });

    it('should make GET request for array of employee objects.', function() {

        var requestData = [{
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
        }];

        expect(mockEmployee.query).toBeDefined();

        $httpBackend.expectGET('/api/employees')
            .respond(200, requestData);

        mockEmployee.query().$promise.then(function(result) {

            $httpBackend.flush();
            expect(result).toEqual(jasmine.any(Function));
            expect(result).toEqual(requestData);
        });

    });

    it('should get proper error message', function() {

        $httpBackend.expectGET('/api/employees/wrong-id')
            .respond(500, {
                error: 'error message'
            });

        mockEmployee.get({ id: 'wrong-id' })
            .$promise
            .then(function(result) {
                $httpBackend.flush();
                expect(result.error).toBeDefined();
                expect(result.error).toEqual('error message');
                expect(result.firstName).toBeUndefined();
            });

    });

});
