<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = (function() {
    var totalNoObjects = 0,
        totalNoKeys = 0;
    return {
        traverse: traverse
    }

    function check(obj) {
        if (obj == null) {
            return "The File Is Empty";
        }
    }
    // Traverse expected json
    function traverse(obj) {
        if (obj instanceof Array) {
            totalNoObjects++;
            obj.forEach(function(value, index) {
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
            totalNoObjects: totalNoObjects,
            totalNoKeys: totalNoKeys
        }
    }
})();
=======
module.exports = (function () {
    var totalNoObjects = 0, totalNoKeys = 0;
  return {
    traverse : traverse
>>>>>>> 32b07bbb0fd410c08ccb3478e5c10045736fc5a4
=======
module.exports = (function () {
    let totalNoObjects = 0, totalNoKeys = 0;
  return {
    traverse: traverse
>>>>>>> 6a2af07c1b5e67519eda0beea0a3a71fde6840e6
  }
  // Traverse expected json
  function traverse(obj) {
        if (obj instanceof Array) {
<<<<<<< HEAD
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
=======
        totalNoObjects = totalNoKeys + 1;
            obj.forEach(function (value) {
            if (typeof value === 'object' && value) {
                traverse(value);
            } else {
              totalNoKeys = totalNoKeys + 1;
            }
          });
      } else {
          totalNoObjects = totalNoKeys + 1;
          for (let prop in obj) {
              if (typeof obj[prop] === 'object' && obj[prop]) {
                  traverse(obj[prop]);
              } else {
                totalNoKeys = totalNoKeys + 1;
>>>>>>> 6a2af07c1b5e67519eda0beea0a3a71fde6840e6
              }
          }
      }
      return {
<<<<<<< HEAD
        totalNoObjects : totalNoObjects,
        totalNoKeys    : totalNoKeys
      }
=======
        totalNoObjects: totalNoObjects,
        totalNoKeys: totalNoKeys
      };
>>>>>>> 6a2af07c1b5e67519eda0beea0a3a71fde6840e6
  }
})();
>>>>>>> 6a2af07c1b5e67519eda0beea0a3a71fde6840e6
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
>>>>>>> 801d5d63957283f3744099ffc8055fdfa5785fc7
