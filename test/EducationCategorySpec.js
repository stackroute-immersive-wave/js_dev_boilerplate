const should = require("chai").should(),
expect = require("chai").expect,
sinon = require('sinon'),
readline = require("readline"),
fs=require("fs"),
education = require("../js/educationCategory");

describe("A series of test for Converting  CSV3 to JSON3",
	function(err){
		it('should fail if year is notprovided', function(done){
        expect(education).to.throw(Error, "Not a number");
        done();
    });

  it('should fail if year is not a number', function(done){
        expect(education.bind(undefined, {})).to.throw(Error, "Not a number");
        done();
    });

   it('should fail if year is NaN', function(done){
        expect(education.bind(undefined, NaN)).to.throw(Error, "Not a number");
        done();
    });


	it('Calculate the total value ', function(done){
					expect(education.bind(undefined, {})).to.not.equal(0);
					done();
		});

		it('should not have zero length ', function(done){
         expect(education.bind(undefined, {})).to.not.equal(0);
         done();
     });

});
