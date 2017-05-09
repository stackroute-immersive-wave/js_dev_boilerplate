const fs = require('fs');
module.exports = function convert(startYear) {
  if(typeof startYear === 'string')
  {
    return '';
  }
  else if(typeof startYear !== 'number' || isNaN(startYear))
  {
       throw new Error('Not a number');
  }

const ln = require('readline').createInterface({
 input: fs.createReadStream('FoodFacts.csv')
});
const country = ['Netherlands', 'Canada', 'United Kingdom', 'United States',
 'Australia', 'France', 'Germany', 'Spain', 'South Africa'];
const data = [];
const finalc = [];
const sugarindex = 0;
const saltindex = 0;
const countryindex = 0;
const countryv = 0;
const sugar = 0;
const salt = 0;
const i = 0;

const sugarv = Array(9).fill(0);
const saltv = Array(9).fill(0);

ln.on('line', function (line) {
data = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

while(i < 1)
 {
   countryindex = data.indexOf('countries_en');
   sugarindex = data.indexOf('sugars_100g');
   saltindex = data.indexOf('salt_100g');
   i = i + 1;
 }

countryv = data[countryindex];

sugar = data[sugarindex];
salt = data[saltindex];
  if(salt === '') {
   salt = 0;
}
  if(sugar === '') {
   sugar = 0;
}

const index = country.indexOf(countryv);

    if(index !== -1) {
     sugarv[index] = sugarv[index] + parseFloat(sugar);
     saltv[index] = saltv[index] + parseFloat(salt);
    }
});

ln.on('close', function() {
 for(let h = 0; h < country.length; h = h + 1) {
   finalc.push({ Country: country[h], Sugar: sugarv[h], Salt: saltv[h]});
}

fs.writeFile('output_food1.json', JSON.stringify(finalc));
});

return 'JSON written successfully';
};
