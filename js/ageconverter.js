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

let file = fs.readFileSync('./outputdata/India2011Merge.csv');
let fileString = file.toString();
let lines = fileString.split('\n');
let key = new Set();
let outputarray = [];
for(let i = 1; i < lines.length - 2; i = i + 1)
{
  let currentline = lines[i].split(',');
  key.add(currentline[5]);
}
if(key.length !== 0)
{
return key.length;
}

for(let age of key)
{
let totalGraduate = 0;
let Age = 0;
for(let i = 1; i < lines.length; i = i + 1)
{
  let currentline = lines[i].split(',');
    if(currentline[4] === 'Total' && currentline[5] === age &&
    currentline[5] !== 'Age not stated' && currentline[5] !== 'All ages')
    {
      totalGraduate = totalGraduate + Number(currentline[12]);
      Age = currentline[5];
    }
}
if(totalGraduate < 0)
{
  return totalGraduate;
}
outputarray.push({Age: Age,
totalGraduate: totalGraduate });
}
fs.writeFileSync('./outputdata/outputJSONdeepika1.json', JSON.stringify(outputarray));
return 'success';
};
