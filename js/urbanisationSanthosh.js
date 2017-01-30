const fs = require('fs');
const rl = require('readline');
module.exports = function converter(startYear, endYear, countryArray) {
    if(isNaN(startYear) || startYear === null) {
        throw new Error('Not a number');
    }
    if(isNaN(endYear) || endYear === null) {
      return 'Invalid Year';
    }
    if(countryArray === null || countryArray.length === 0) {
      return 'Invalid Country';
    }
    let rd = rl.createInterface({
        input: fs.createReadStream('../csv/Indicators.csv'),
        output: process.stdout,
        terminal: false
    });
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let rural = 0;
    let ruralArr = [0, 0, 0, 0, 0];
    let urbanArr = [0, 0, 0, 0, 0];
    rd.on('line', function(data) {
        let linearr = data.split(',');
        if(linearr[1] === 'IND' && (linearr[4] >= startYear &&
           linearr[4] <= endYear) && linearr[3] === 'SP.RUR.TOTL.ZS')
        {
          rural = linearr[5];
        }
        if(linearr[1] === 'IND' && (linearr[4] >= startYear
          && linearr[4] <= endYear) && linearr[3] === 'SP.URB.TOTL.IN.ZS')
        {
          arr1.push({
            year: linearr[4],
            'Rural population (% of total)': rural,
            'Urban population (% of total)': linearr[5]});
        }
        if(linearr[1] === 'IND' && (linearr[4] >= startYear &&
          linearr[4] <= endYear) && linearr[3] === 'SP.URB.GROW')
        {
          arr2.push({year: linearr[4], 'Urban population growth (annual %)': linearr[5]});
        }

        for (let i = 0; i < countryArray.length; i = i + 1) {
          if(linearr[0] === countryArray[i] && linearr[3] === 'SP.RUR.TOTL')
          {
            ruralArr[i] = ruralArr[i] + parseInt(linearr[5], 10);
          }
          if(linearr[0] === countryArray[i] && linearr[3] === 'SP.URB.TOTL')
          {
            urbanArr[i] = urbanArr[i] + parseInt(linearr[5], 10);
          }
        }
    });

    rd.on('close', function() {
      for(let i = 0; i < countryArray.length; i = i + 1) {
          arr3.push({
            Country: countryArray[i],
            Urban: urbanArr[i],
            Rural: ruralArr[i]});
      }
    //  console.log(arr3);
    //  console.log(arr3.length);
      for (let i = 0; i < arr3.length; i = i + 1) {
          for (let j = 0; j < arr3.length - 1; j = j + 1) {
            let tot = arr3[j].Urban + arr3[j].Rural;
            let tot1 = parseInt(arr3[j + 1].Urban, 10) + parseInt(arr3[j + 1].Rural, 10);
              if(tot < tot1) {
                 let temp = arr3[j];
                 arr3[j] = arr3[j + 1];
                 arr3[j + 1] = temp;
              }
          }
      }
      fs.writeFile('../outputdata/outputJsonSanthosh1.json', JSON.stringify(arr1));
      fs.writeFile('../outputdata/outputJsonSanthosh2.json', JSON.stringify(arr2));
      fs.writeFile('../outputdata/outputJsonSanthosh3.json', JSON.stringify(arr3));
      //  console.log('Done');
    });
    return 'JSON written successfully';
};
