describe('_Report_ factory', function() {

    var _Report_;
    beforeEach(module('app'));
    beforeEach(inject(function(Report) {
        _Report_ = Report;
    }));

    it('should exist', function() {
        expect(_Report_).toBeDefined();
    });

    describe('findByManager()', function() {

        it('should exist', function() {
            expect(_Report_.findByManager).toBeDefined();
        });

        var testObj = [{
            managerId: 1
        }, {
            managerId: 2
        }, {
            managerId: 3
        }, {
            managerId: 4
        }];

        it('filter out all records from 1st parameter \
        except on 2nd parameter and return it', function() {

            expect(_Report_.findByManager(testObj, 3))
                .toEqual([{managerId: 3}]);

            expect(_Report_.findByManager(testObj, 5)).toEqual([]);
        });
    });

    describe('query()', function() {

        it('should exist', function() {
            expect(_Report_.query).toBeDefined();
        });

    });



});
