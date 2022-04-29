describe('test my regCheck function', function () {
    it('it should return "true" when registration number ends with location', function () {
        assert.equal(true, regCheck("RG45 HN GP", "GP"));
    });
    it('it should return "true" when registration number ends with location', function () {
        assert.equal(true, regCheck("FGT 491 L", "L"));
    });
    // it('it should return "true" when registration number ends with location', function () {
    //     assert.equal(true, regCheck("FGT 491 L", "EC"));
    // });
    it('it should return "false" when registration number does not end with location', function () {
        assert.equal(false, regCheck("WV 55 HN GP"));
    });

    it('it should return "false" when registration number does not end with location', function () {
        assert.equal(false, regCheck("CV45 HN GP"));
    });

});