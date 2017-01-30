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

let outputarray = [];
let lineofline = lines[0].split(',');
let e = [];
let d = 0;
for (let k = 15; k < lineofline.length; k = k + 3) {
    e[d] = lineofline[k];
    d = d + 1;
}
if(e.length !== 0)
{
return e.length;
}


let inc = 0;

for (let l = 0; l < e.length; l = l + 1) {
    let Title;
    let Total = 0;
    for (let i = 1; i < lines.length; i = i + 1) {
        let currentline = lines[i].split(',');
        if (currentline[5] === 'All ages' && currentline[4] === 'Total' &&
        currentline[15 + inc] !== null) {
            Title = e[l];
            Total = Total + Number(currentline[15 + inc]);
        }
}
    if(Total < 0)
    {
      return Total;
    }
    inc = inc + 3;
    outputarray.push({
        Title: Title,
        Total: Total
    });
}
fs.writeFileSync('../outputdata/outputJSONdeepika3.json', JSON.stringify(outputarray));
return 'success';
};
