describe('test my function isWeekDay', function(){
    it('it should return "false" if the day inserted starts with S', function(){
        assert.equal(false, isWeekDay("Saturday"));
    });
    it('it should return "true" if the day inserted does not start with S', function(){
        assert.equal(true, isWeekDay("Tuesday"));
    });
    it('it should return "true" if the day inserted does not start with S', function(){
        assert.equal(true, isWeekDay("Monday"));
    });
});