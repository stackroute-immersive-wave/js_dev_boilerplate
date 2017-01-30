var chai = require('chai');
var expect = chai.expect;
var jsonDiff = require('../test/jsondiff');
var totalObjectKeys = require('../test/totalObjectKeys');
var expectedJSON = require('./ExpectedJSON/ExpectedJSONdeepika1.json');
var actualJSON = require('../outputdata/outputJSONdeepika1.json');
var testJSON=require('../outputdata/TestJSON.js');
describe('Test Application as Blackbox', function(){
  it ('Test JSON is well formed', function(done){
    /*ToDO Parse JSON*/
    done();
  });
  it('Checking The File',function(done)
  {
    var result=jsonDiff.check(testJSON);
    expect(result).equal('File Is Contains Some Value');
    done();
  });
  it('JSON has expected Number of Objects', function(done){
    var objMatrix = totalObjectKeys.traverse(actualJSON);
    expect(objMatrix.totalNoObjects).to.not.equal(0);
    expect(objMatrix.totalNoKeys).to.not.equal(0);
    done();
  });
  it('Test JSON is as expected', function(done){
    var compareResult = jsonDiff.compareJSONObjects(expectedJSON, actualJSON);
    expect(compareResult.diffs).equal(0);
    done();
  });
})
