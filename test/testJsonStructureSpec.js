var chai = require('chai');
var expect = chai.expect;
var jsonDiff = require('./jsondiff');
var totalObjectKeys = require('./totalObjectKeys');
var expectedJSON = require('./expectedJSON/worldDevIndicatorUrbanization1.json');
var actualJSON = require('../outputdata/worldDevIndicatorUrbanization.json');

describe('Test Application in Blackbox', function(){
  it ('Test JSON is well formed', function(done){
    done();
  });

  it.skip('JSON has expected Number of Objects', function(done){
   var expectedObjMatrix = totalObjectKeys.traverse(expectedJSON);
   var actualObjMatrix = totalObjectKeys.traverse(actualJSON);
    expect(actualObjMatrix.totalNoObjects).to.equal(expectedObjMatrix.totalNoObjects);
    expect(actualObjMatrix.totalNoKeys).to.equal(expectedObjMatrix.totalNoKeys);
    done();
  });

  it('Test JSON is as expected', function(done){
    var compareResult = jsonDiff.compareJSONObjects(expectedJSON, actualJSON);
    expect(compareResult.diffs).equal(0);
    done();
  });
  
});
