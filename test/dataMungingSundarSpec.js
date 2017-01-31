const should = require("chai").should();
const expect = require("chai").expect,
sinon = require('sinon'),
readline = require("readline"),
fs=require("fs"),
convert = require("../js/worksundar");

describe("A series of test for Converting  CSV to JSON",
	function(err){
		it('should output success message at last ', function(done){
					var result=convert('Spain')
					result.should.be.equal('JSON written successfully');
					 done();
		});

   it('should fail if country is notprovided', function(done){
        expect(convert).to.throw(Error, "country not found");
        done();
    });

  it('should fail if country is not a string', function(done){
        expect(convert.bind(undefined, {})).to.throw(Error, "country not found");
        done();
    });

   it('should fail if country is a number', function(done){
        expect(convert.bind(undefined, !NaN)).to.throw(Error, "country not found");
        done();
    });

		it('should not fail if the year is a literal number', function(done){
			expect(convert.bind(undefined, 1960)).to.throw(Error, "country not found");
			done();
		});

		it('should not fail if the year is a Number object', function(done){
			expect(convert.bind(undefined, 'sncd')).to.not.throw(Error, "country not found");
			done();
		});
	});


describe("Test createInterface method of readline", function(err){
		it("should be called only once", function() {
            var spyCreateInterface = sinon.spy(readline, 'createInterface');
            convert('albania');
            readline.createInterface.restore();
            sinon.assert.calledOnce(spyCreateInterface);
    });
  });
    describe("Test on method of Interface for line event", function(err){
    it("should be called", function() {
           var stub = sinon.stub(readline.Interface.prototype, 'on');
           convert('albania');
           sinon.assert.called(stub);
           readline.Interface.prototype.on.restore();
           sinon.assert.calledWith(stub,"line");

    });
   });

    describe("Test on method of Interface for close event", function(err){
    it("should be called", function() {
           var stub = sinon.stub(readline.Interface.prototype,'on');
           convert('albania');
           readline.Interface.prototype.on.restore();
           sinon.assert.calledWith(stub,"close");
    });

 	});
