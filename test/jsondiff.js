module.exports = (function(){
  return {
    compareJSONStrings: function(expectedJSONStr, actualJSONStr) {
      if (!expectedJSON || !actualJSON) {
        return;
      }
      return compareObjects(JSON.parse(expectedJSONStr), JSON.parse(actualJSONStr));
    },
    check:function(obj)
    {
      if(obj.size!=0)
      {
        return "File Is Contains Some Value";
      }
      else {
        {
          return "File Is Empty";
        }
      }
    },
  compareJSONObjects:   function(expectedJSON, actualJSON) {
      if (!expectedJSON || !actualJSON) {
        return;
      }
      var expectedDataSet = new Set(toDataMap(expectedJSON));
      var actualJSONObjs = actualJSON;
      var diffs = [];
      var matched = [];
      actualJSONObjs.forEach(function(obj) {
        var actual = toObjValueHash(obj);
        if (expectedDataSet.has(actual)) {
          matched.push(obj);
        } else {
          diffs.push(obj);
        }
      });
      if (diffs.length > 0) {
        // console.log("Differs by ", diffs.length);
        // console.log("Differences: ", diffs);
        return {
          diffs: diffs.length,
          diffObjs : diffs
        }
      } else {
        // console.log("Data is Same");
        return {
          diffs: diffs.length,
          diffObjs : []
        }
      }
      function toDataMap(data) {
        return data.map(toObjValueHash);
      }
      function toObjValueHash(obj) {
        // return Object.values(obj).sort().join(';');
        return objValues(obj).sort().join(';')
      }
      function objValues(obj) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 32b07bbb0fd410c08ccb3478e5c10045736fc5a4
=======
>>>>>>> 801d5d63957283f3744099ffc8055fdfa5785fc7
        var keys = Object.keys(obj);
        var values = [];
        keys.forEach(function(keyName) {
          var val = obj[keyName];
<<<<<<< HEAD
<<<<<<< HEAD
       let keys = Object.keys(obj);
        let values = [];
        keys.forEach(function(keyName) {
          let val = obj[keyName];
       values.push(val);
=======
=======
        let keys = Object.keys(obj);
        let values = [];
        keys.forEach(function(keyName) {
          let val = obj[keyName];
>>>>>>> 6a2af07c1b5e67519eda0beea0a3a71fde6840e6
=======
>>>>>>> 801d5d63957283f3744099ffc8055fdfa5785fc7
          values.push(val);
>>>>>>> 32b07bbb0fd410c08ccb3478e5c10045736fc5a4
        });
        return values;
      }
    }
  }
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 6a2af07c1b5e67519eda0beea0a3a71fde6840e6
>>>>>>> 32b07bbb0fd410c08ccb3478e5c10045736fc5a4
=======
>>>>>>> 801d5d63957283f3744099ffc8055fdfa5785fc7
})();
