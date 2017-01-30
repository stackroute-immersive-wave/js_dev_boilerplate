module.exports = (function(age)
{
if(!age){
  throw Error('Not a number');
}
if(typeof age!=="number"){
    throw Error('Not a number');
}
  else {
let log4js = require('log4js');
let logger = log4js.getLogger();
const readline = require('readline');
const fs = require('fs');
let header = [];
let jsonData1 = [];
let jsonData2 = [];
let tempData1 = {};
let tempData2 = {};
let over = [];
let under = [];
let noArrest = [];
let i = 0;
let arrested = [];
let year = 0;
let type = 0;
let description = 0;
let arrest = 0;
for (i = 0; i <= 15; i = i + 1) {
    over[i] = 0;
    under[i] = 0;
    arrested[i] = 0;
    noArrest[i] = 0;
}
let isHeader = true;
/*creating interface*/
const rl = readline.createInterface({

    input: fs.createReadStream('../inputdata/crimedata.csv')

});
rl.on('line', function(line) {
    let lineRecords = line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (i = 0; i < lineRecords.length; i = i + 1) {
        if (isHeader) {
            header[i] = lineRecords[i];
            if (header[i] === 'Year') {
                year = i;
            }
            if (header[i] === 'Description') {
                description = i;
            }
            if (header[i] === 'Arrest') {
                arrest = i;
            }
            if (header[i] === 'Primary Type') {
                type = i;
            }
        }
    }

    if (lineRecords[type] === 'THEFT' && lineRecords[description] === 'OVER $500') {
        over[lineRecords[year] - 2001] = over[lineRecords[year] - 2001] + 1;
    } else if (lineRecords[type] === 'THEFT' && lineRecords[description] === '$500 AND UNDER') {
        under[lineRecords[year] - 2001] = under[lineRecords[year] - 2001] + 1;
    } else if (lineRecords[type] === 'ASSAULT' && lineRecords[arrest] === 'true') {
        arrested[lineRecords[year] - 2001] = arrested[lineRecords[year] - 2001] + 1;
    } else if (lineRecords[type] === 'ASSAULT' && lineRecords[arrest] === 'false') {
        noArrest[lineRecords[year] - 2001] = noArrest[lineRecords[year] - 2001] + 1;
    }

    isHeader = false;
});

rl.on('close', function() {
    for (i = 0; i <= 15; i = i + 1) {
        tempData1 = {};
        tempData1.Year = i + 2001;
        tempData1['Over $500'] = over[i];
        tempData1['Under $500'] = under[i];
        jsonData1.push(tempData1);
        tempData2 = {};
        tempData2.Year = i + 2001;
        tempData2.Arrested = arrested[i];
        tempData2['Not Arrested'] = noArrest[i];
        jsonData2.push(tempData2);
    }
    /*getting json values*/
    fs.writeFileSync('../outputdata/outputJsonRaji1.json', JSON.stringify(jsonData1), 'utf8');
    logger.debug('Writtten to file 1');
    fs.writeFileSync('../outputdata/outputJsonRaji2.json', JSON.stringify(jsonData2), 'utf8');
    logger.debug('Written to file 2');
  });
  return "JSON written successfully";
}
});
=======
module.exports = function convertCsv(startYear) {
  if (typeof startYear !== 'number' || isNaN(startYear)) {
       throw new Error('Not a number');
  }
  const fs = require('fs');
  const readLine = require('readline');
  let barArr = [];
  let lineArr = [];
  for(let i = startYear; i <= 2016; i = i + 1) {
    let bobj = {year: i, OVER$500: 0, $500ANDUNDER: 0};
    let lobj = {year: i, ARRESTED: 0, NOTARRESTED: 0};
    barArr.push(bobj);
    lineArr.push(lobj);
  }
  let rd = readLine.createInterface({
    input: fs.createReadStream('inputdata/crimedata.csv'),
    output: process.stdout,
    terminal: false
  });
  rd.on('line', function(line) {
    let data = line.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/);
    let id = data[0] + '';
    if(id.length <= 4) {
     return;
    }
    let year = data[17];
    let arrested = data[8];
    let type = data[6];
    if(data[5] === 'ASSAULT') {
      if(arrested === 'TRUE' || arrested === 'true') {
        lineArr[year - 2001].ARRESTED = lineArr[year - 2001].ARRESTED + 1;
      }
      else if(arrested === 'FALSE' || arrested === 'false') {
        lineArr[year - 2001].NOTARRESTED = lineArr[year - 2001].NOTARRESTED + 1;
      }
    }
    if(type === 'OVER $500') {
      barArr[year - 2001].OVER$500 = barArr[year - 2001].OVER$500 + 1;
    }
    else if(type === '$500 AND UNDER') {
      barArr[year - 2001].$500ANDUNDER = barArr[year - 2001].$500ANDUNDER + 1;
    }
  });
  rd.on('close', function() {
    fs.writeFileSync('outputdata/linejson.json', JSON.stringify(lineArr));
    fs.writeFileSync('outputdata/barjson.json', JSON.stringify(barArr));
  });
  return 'JSON written successfully';
};
