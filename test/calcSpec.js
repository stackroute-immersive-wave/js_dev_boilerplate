/*eslint-disable*/
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

>>>>>>> 405a11009edadd3f0a2513fb210c32ac8f0faad5
