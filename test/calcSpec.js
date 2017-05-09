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
<<<<<<< HEAD
  });
=======

  });
>>>>>>> a4acdeda2d77b624c9b878e4fb2cc3942e73ddc5
=======

  });


  

>>>>>>> c3406a7d2d904760da760a8b6d1768b6c1341ca2
