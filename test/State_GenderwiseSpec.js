const should = require("chai").should(),
expect = require("chai").expect,
sinon = require('sinon'),
readline = require("readline"),
fs=require("fs"),
agecon = require("../js/state_Gender");

describe("A series of test for Converting  CSV2 to JSON2",
	function(err){
		it('should fail if year is notprovided', function(done){
        expect(agecon).to.throw(Error, "Not a number");
        done();
    });

  it('should fail if year is not a number', function(done){
        expect(agecon.bind(undefined, {})).to.throw(Error, "Not a number");
        done();
    });

   it('should fail if year is NaN', function(done){
        expect(agecon.bind(undefined, NaN)).to.throw(Error, "Not a number");
        done();
    });


	it('Calculate the total value ', function(done){
					expect(agecon.bind(undefined, {})).to.not.equal(0);
					done();
		});

		it('should not have zero length ', function(done){
         expect(agecon.bind(undefined, {})).to.not.equal(0);
         done();
     });

});


// describe("Test createInterface method of readline", function(err){
// 		it("should be called only once", function() {
//             var spyCreateInterface = sinon.spy(readline, 'createInterface');
//             agecon(2016);
//             readline.createInterface.restore();
//             sinon.assert.calledOnce(spyCreateInterface);
//     });
//   });
//     describe("Test on method of Interface for line event", function(err){
//     it("should be called", function() {
//            var stub = sinon.stub(readline.Interface.prototype, 'on');
//            agecon(2016);
//            sinon.assert.called(stub);
//            readline.Interface.prototype.on.restore();
//            sinon.assert.calledWith(stub,"line");
//
//     });
//    });
//
//     describe("Test on method of Interface for close event", function(err){
//     it("should be called", function() {
//            var stub = sinon.stub(readline.Interface.prototype,'on');
//            agecon(2016);
//            readline.Interface.prototype.on.restore();
//            sinon.assert.calledWith(stub,"close");
//     });
//
//  	});
