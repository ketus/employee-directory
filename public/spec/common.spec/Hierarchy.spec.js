describe('Hierarchy service', function() {

    var Hierarchy;

    beforeEach(function() {
        inject(module('app'));
        inject(function(_Hierarchy_) {
            Hierarchy = _Hierarchy_;
        });
    });

    describe('getNestedChildren()', function() {

        xit('should be defined', function() {
            expect(Hierarchy.get).toBeDefined();
        });

    });

});
