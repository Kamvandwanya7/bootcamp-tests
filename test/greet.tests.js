// console.log(greet("Phumza"));

describe('test my greet function', function () {
    it('it should return "Hello Phumza" when called with Phumza', function () {
        assert.equal("Hello, Phumza", greet("Phumza"));
    });

    it('it should return "Hello Zintle" when called with Zintle', function () {
        assert.equal("Hello, Zintle", greet("Zintle"));
    });

    it('it should return "Hello zano" when called with zano', function () {
        assert.equal("Hello, zano", greet("zano"));
    });

});

describe('test my isDayName function', function () {
    it('it should return "true" when called with monday', function () {
        assert.equal(true, isDayName("monday"));

    });
    it('it should return "true" when called with tuesday', function () {
        assert.equal(true, isDayName("tuesday"));
    });

    it('it should return "false" when called with january', function () {
        assert.equal(false, isDayName("january"));

    });
});