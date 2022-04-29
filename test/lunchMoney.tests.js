describe('test my lunchMoney function', function(){
    it('it should return 148.5 when called with "gatsby, gatsby, gatsby"', function(){
        assert.equal(148.5,lunchMoney("gatsby, gatsby, gatsby"));
    });
    it('it should return "error" when called with "grapes"', function(){
        assert.equal("error", lunchMoney("gatsby, chips, grapes"));
    });
    it('it should return 24.75 when called with "chips"', function(){
        assert.equal(24.75, lunchMoney("chips"));
    });
});