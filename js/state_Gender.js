const fs = require('fs');
module.exports = function (obj) {
  if(!obj)
  {
    throw new Error('Not a number');
  }

  if(typeof obj !== Number)
  {
    throw new Error('Not a number');
  }

let file = fs.readFileSync('../outputdata/India2011Merge.csv');
let fileString = file.toString();
let lines = fileString.split('\n');
let key = new Set();
let outputarray = [];

for(let i = 1; i < lines.length - 2; i = i + 1)
{
  let currentline = lines[i].split(',');
  key.add(currentline[3]);
}
if(key.length !== 0)
{
return key.length;
}


for(let state of key)
{
let totalGraduateMale = 0;
let totalGraduateFemale = 0;

let State = null;
for(let i = 1; i < lines.length; i = i + 1)
{
  let currentline = lines[i].split(',');
    if(currentline[5] === 'All ages' && currentline[3] === state && currentline[4] === 'Total')
    {
      totalGraduateMale = totalGraduateMale + Number(currentline[41]);
      totalGraduateFemale = totalGraduateFemale + Number(currentline[40]);
      State = currentline[3];
}
}
if(totalGraduateMale < 0 && totalGraduateFemale < 0)
{
  return 0;
}

outputarray.push({State: State,
Male: totalGraduateMale,
Female: totalGraduateFemale});
}
fs.writeFileSync('../outputdata/outputJSONdeepika2.json', JSON.stringify(outputarray));
return 'Success';
};
