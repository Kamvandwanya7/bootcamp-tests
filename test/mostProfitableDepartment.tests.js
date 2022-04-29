describe('test my function mostProfitableDepartment', function(){
    it('it should return the most profitable department', function(){
        assert.deepEqual([{department : 'hardware', sales : 12000}] , mostProfitableDepartment([{department: 'carpentry', sales : 8009}, {department : 'hardware', sales : 12000 },{department : 'electronics', sales : 6109 }]));
    });
    it('it should return "true" if the day inserted does not start with S', function(){
        assert.equal(true, mostProfitableDepartmenty("Tuesday"));
    });
});