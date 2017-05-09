const should = require("chai").should(),
expect = require("chai").expect,
sinon = require('sinon'),
add = require("../js/calc");

describe.only("Test add method of calc", function(){
		it("should return the addition of two numbers", function() {
           var result = add(5,10);
  	       result.should.be.equal(15);
    });
<<<<<<< HEAD
  });
=======

  });
>>>>>>> a4acdeda2d77b624c9b878e4fb2cc3942e73ddc5
