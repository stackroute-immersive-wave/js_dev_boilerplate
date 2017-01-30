/* csv to json for female and male catagory */

/* creating a interface to read the file */
module.exports = (year1, year2) =>
{
let fs = require('fs');
let re = require('readline');
let lineReader = re.createInterface({
    input: fs.createReadStream('../inputdata/Indicators.csv')
});
if (typeof year1 !== 'number' || isNaN(year1)) {
        throw new Error('Not a number');
    }
//  if(year1 === null || year2 === null)
//  {
//      throw new Error('year no provided');
//  }

/* insializing variables */
let count = 0;
let output1 = [];
let sum = 0.0;
let sum1 = 0.0;
let year = year1;
// let str = ';

// assign the asian country to array
let asiancountry = ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh',
    'Bhutan', 'Brunei', 'Cambodia',
    'China', 'Cyprus', 'Georgia', 'India',
    'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan',
    'Laos',
    'Lebanon', 'Malaysia', 'Maldives',
    'Mongolia', 'Myanmar (Burma)', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine',
    'Philippines', 'Qatar', 'Russia', 'Saudi Arabia',
    'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 'Taiwan', 'Tajikistan', 'Thailand',
    'Timor-Leste', 'Turkey', 'Turkmenistan',
    'United Arab Emirates (UAE)', 'Uzbekistan', 'Vietnam', 'Yemen'];

 //  let asiancountry = new Array('India','Pakistan');

// Reading the csv file line by line
lineReader.on('line', function(line) {
    let split2 = line.trim().split(/,(?=(?:(?:[^']*'){2})*[^']*$)/);
    let Object1 = {};

    // condition to get index values of required keys
    if (count === 0) {
        count = count + 1;
    }

    // To get the details of the csv file
    else {
        // To get the female life expectancy
        if (year < parseInt(split2[4], 10) && (split2[3] === 'SP.DYN.LE00.FE.IN' ||
            split2 [3] === 'SP.DYN.LE00.MA.IN')) {
            Object1 = {
                Year: year,
                'Life expectancy at birth, female (years)': sum,
                'Life expectancy at birth, male (years)': sum1
            };
            output1.push(Object1);
            sum = 0;
            sum1 = 0;
            year = year + 1;
        }
        for (let i = 0; i < asiancountry.length; i = i + 1) {
            if (split2[0] === asiancountry[i] && split2[3] === 'SP.DYN.LE00.FE.IN') {
                sum = sum + parseFloat(Math.round(split2[5]));
            }
        }
        // To get the male life expectancy
        for (let i = 0; i < asiancountry.length; i = i + 1) {
            if (split2[0] === asiancountry[i] && split2[3] === 'SP.DYN.LE00.MA.IN') {
                sum1 = sum1 + parseFloat(Math.round(split2[5]));
            }
        }

        // To push the values into object
        // End of push the values into object
    }
    // End of the details of the csv file
});
// End of Reading the csv file line by line


// write into the json file when the read is finished
lineReader.on('close', function() {
    // console.log(year);
if(year === year2)
        {
            let Object1 = {
                Year: year,
                'Life expectancy at birth, female (years)': sum,
                'Life expectancy at birth, male (years)': sum1
            };
            output1.push(Object1);
        }
    fs.writeFile('../outputdata/Male_Female_Expentency.json', JSON.stringify(output1));
});
return 'JSON written successfully';
};

// End of write into the json file when the read is finished
