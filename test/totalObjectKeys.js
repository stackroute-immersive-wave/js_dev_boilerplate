<<<<<<< HEAD
module.exports = (function () {
    var totalNoObjects = 0, totalNoKeys = 0;
  return {
    traverse : traverse
  }
  // Traverse expected json
  function traverse(obj) {
        if (obj instanceof Array) {
        totalNoObjects++;
            obj.forEach(function (value, index) {
            if (typeof value == "object" && value) {
                traverse(value);
            } else {
              totalNoKeys++;
            }
          })
      } else {
          totalNoObjects++;
          for (var prop in obj) {
              if (typeof obj[prop] == "object" && obj[prop]) {
                  traverse(obj[prop]);
              } else {
                totalNoKeys++;
              }
          }
      }
      return {
        totalNoObjects : totalNoObjects,
        totalNoKeys    : totalNoKeys
      }
  }
})();
=======
module.exports = (function () {
    var totalNoObjects = 0, totalNoKeys = 0;
  return {
    traverse : traverse
  }
  // Traverse expected json
  function traverse(obj) {
        if (obj instanceof Array) {
        totalNoObjects++;
            obj.forEach(function (value, index) {
            if (typeof value == "object" && value) {
                traverse(value);
            } else {
              totalNoKeys++;
            }
          })
      } else {
          totalNoObjects++;
          for (var prop in obj) {
              if (typeof obj[prop] == "object" && obj[prop]) {
                  traverse(obj[prop]);
              } else {
                totalNoKeys++;
              }
          }
      }
      return {
        totalNoObjects : totalNoObjects,
        totalNoKeys    : totalNoKeys
      }
  }
})();
>>>>>>> 6304e2d147324248d0009a539904732f6d42d448
