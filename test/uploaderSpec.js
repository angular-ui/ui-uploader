describe('uiUploader', function() {
    'use strict';

    var $scope, $compile, elm;

    beforeEach(module('ui.uploader'));
    beforeEach(inject(function(_$rootScope_, _$compile_) {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
    }));

    // TODO add real tests
    it('dummy test', function() {
        expect(true).toBeTruthy();
    });

});
