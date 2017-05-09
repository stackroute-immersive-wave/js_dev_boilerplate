
const should = require("chai").should(),
expect = require("chai").expect,
sinon = require('sinon'),
readline = require("readline"),
fs=require("fs"),
<<<<<<< HEAD
convert = require("../js/lifeExpectancyMeghna.js");

describe("A series of test for Converting  CSV to JSON",
	function(err){

  it("should return sucess message", function(done){
  	var result = convert(2001);
  	result.should.be.equal('JSON written successfully');
    done();
    });

   it('should fail if year is notprovided', function(done){
        expect(convert).to.throw(Error, "Not a number");
        done();
    });

  it('should fail if year is not a number', function(done){
=======

convert = require("../js/lifeExpectancyKavya.js");

describe("A series of test for Converting  CSV to JSON",
    function(err){

 it("should return sucess message", function(done){
      var result = convert(2001);
      result.should.be.equal('JSON written successfully');
    done();
    });

  it('should fail if year is notprovided', function(done){
        expect(convert).to.throw(Error, "Not a number");
        done();
    });

 it('should fail if year is not a number', function(done){
>>>>>>> a4acdeda2d77b624c9b878e4fb2cc3942e73ddc5
        expect(convert.bind(undefined, {})).to.throw(Error, "Not a number");
        done();
    });

<<<<<<< HEAD
   it('should fail if year is NaN', function(done){
=======
  it('should fail if year is NaN', function(done){
>>>>>>> a4acdeda2d77b624c9b878e4fb2cc3942e73ddc5
        expect(convert.bind(undefined, NaN)).to.throw(Error, "Not a number");
        done();
    });

<<<<<<< HEAD
   it('should not fail if the year is a literal number', function(done){
=======
  it('should not fail if the year is a literal number', function(done){
>>>>>>> a4acdeda2d77b624c9b878e4fb2cc3942e73ddc5
        expect(convert.bind(undefined, '1960')).to.not.throw(Error, "Not a number");
        done();
    });

<<<<<<< HEAD
   it('should not fail if the year is a Number object', function(done){
=======
  it('should not fail if the year is a Number object', function(done){
>>>>>>> a4acdeda2d77b624c9b878e4fb2cc3942e73ddc5
        expect(convert.bind(undefined, Number(1960))).to.not.throw(Error, "Not a number");
        done();
    });
});


describe("Test createInterface method of readline", function(err){
        it("should be called only once", function() {
            var spyCreateInterface = sinon.spy(readline, 'createInterface');
            convert(2016);
            readline.createInterface.restore();
            sinon.assert.calledOnce(spyCreateInterface);
    });
  });
    describe("Test on method of Interface for line event", function(err){
    it("should be called", function() {
           var stub = sinon.stub(readline.Interface.prototype, 'on');
           convert(2016);
           sinon.assert.called(stub);
           readline.Interface.prototype.on.restore();
           sinon.assert.calledWith(stub,"line");

   });
   });

   describe("Test on method of Interface for close event", function(err){
    it("should be called", function() {
           var stub = sinon.stub(readline.Interface.prototype,'on');
           convert(2016);
           readline.Interface.prototype.on.restore();
           sinon.assert.calledWith(stub,"close");
    });

    });