const should = require("chai").should(),
expect = require("chai").expect,
sinon = require('sinon'),
add = require("../js/calc");
describe.only("Test add method of calc", function(){
		it("should return the addition of two numbers", function() {
           var result = add(5,10); 
  	       result.should.be.equal(15);             
    });		

		it('should fail if two parameters are not present', function(done){
        expect(add.bind(undefined, 10)).to.throw(Error, "Incorrect parameters");
        done();
    });
  });