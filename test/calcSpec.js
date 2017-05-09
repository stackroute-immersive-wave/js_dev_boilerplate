const should = require("chai").should(),
expect = require("chai").expect,
sinon = require('sinon'),
add = require("../js/calc");

describe("Test add method of calc", function(){
		it("should return the addition of two numbers", function() {
           var result = add(5,10);
  	       result.should.be.equal(15);
    });
<<<<<<< HEAD
  });
=======
		});

>>>>>>> d3fde8976f88a17e1d6f0db76791a27309c7064b
