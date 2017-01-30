module.exports = (actualJSON) => {
  try{
    let JSONstring = JSON.stringify(actualJSON);
    JSON.parse(JSONstring);
    return true;
  }
  catch(e) {
    return e;
  }
};
