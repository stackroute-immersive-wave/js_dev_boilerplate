<<<<<<< HEAD
module.exports = (function () {
    let totalNoObjects = 0, totalNoKeys = 0;
  return {
    traverse: traverse
  }
  // Traverse expected json
  function traverse(obj) {
        if (obj instanceof Array) {
        totalNoObjects = totalNoKeys + 1;
=======
module.exports = (function() {
    let totalNoObjects = 0;
    let totalNoKeys = 0;
  // Traverse expected json
  function traverse(obj) {
        if (obj instanceof Array) {
        totalNoObjects = totalNoObjects + 1;
>>>>>>> b6b85062a3ed1cede9f07cf3cda441d5db805779
            obj.forEach(function (value) {
            if (typeof value === 'object' && value) {
                traverse(value);
            } else {
              totalNoKeys = totalNoKeys + 1;
            }
          });
      } else {
<<<<<<< HEAD
          totalNoObjects = totalNoKeys + 1;
=======
            totalNoObjects = totalNoObjects + 1;
>>>>>>> b6b85062a3ed1cede9f07cf3cda441d5db805779
          for (let prop in obj) {
              if (typeof obj[prop] === 'object' && obj[prop]) {
                  traverse(obj[prop]);
              } else {
                totalNoKeys = totalNoKeys + 1;
              }
          }
      }
      return {
        totalNoObjects: totalNoObjects,
        totalNoKeys: totalNoKeys
      };
  }
<<<<<<< HEAD
=======
  return {
    traverse: traverse
  };
>>>>>>> b6b85062a3ed1cede9f07cf3cda441d5db805779
})();
