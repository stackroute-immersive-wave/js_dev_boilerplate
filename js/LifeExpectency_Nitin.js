/* csv to json for female and male catagory */

/* creating a interface to read the file*/
module.exports = (y1, y2) =>
{
    if (typeof y1 !== 'number' || isNaN(y1)) {
        throw new Error('Not a number');
    }
let fs = require('fs');
let re = require('readline');
let lineReader = re.createInterface({
    input: fs.createReadStream('../../inputdata/Indicators.csv')
});
/* insializing variables*/
// let indexCountry = '';
// let indexindicatorcode = '';
// let indexyear = 0;
// let indexvalue = 0;
let count = 0;
let output1 = [];
let sum = 0.0;
let sum1 = 0.0;
let year = y1;
// let Object1 = {};
// assign the asian country to array
let asiancountry = ['Afghanistan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Myanmar', 'Cambodia',
'China',
'India', 'Indonesia', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Lebanon', 'Malaysia',
'Maldives', 'Mongolia', 'Nepal', 'Oman', 'Pakistan', 'Philippines', 'Qatar', 'Saudi Arabia',
'Singapore', 'Sri Lanka', 'Syrian Arab Republic', 'Tajikistan', 'Thailand', 'Timor-Leste',
'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen'];
// let asiancountry = new Array('India','Pakistan');
// Reading the csv file line by line
lineReader.on('line', function(line) {
    let split2 = line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    if (count === 0) {
        
        count = count + 1;
    }
    else {
        if (year < parseInt(split2[4], 10) && (split2[3] === 'SP.DYN.LE00.FE.IN' ||
        split2[3] === 'SP.DYN.LE00.MA.IN') && y2 >= parseInt(split2[4], 10)) {
            let Object1 = {
                year: year,
                'LifeExpectancyAtBirthFemale': sum/asiancountry.length,
                'LifeExpectancyAtBirthMale': sum1/asiancountry.length
            };
            output1.push(Object1);
            sum = 0;
            sum1 = 0;
            year = year + 1;
        }
        for (let i = 0; i < asiancountry.length; i = i + 1) {
            if (split2[0] === asiancountry[i] && split2[3] === 'SP.DYN.LE00.FE.IN' &&
            y2 >= parseInt(split2[4], 10)) {
                sum = sum + parseFloat(split2[5]);
            }
        }
        // To get the male life expectancy
        for (let i = 0; i < asiancountry.length; i = i + 1) {
            if (split2[0] === asiancountry[i] && split2[3] === 'SP.DYN.LE00.MA.IN' &&
            y2 >= parseInt(split2[4], 10)) {
                sum1 = sum1 + parseFloat(split2[5]);
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
if(year === y2)
        {
           let Object1 = {
                year: year,
                'LifeExpectancyAtBirthFemale': sum/asiancountry.length,
                'LifeExpectancyAtBirthMale': sum1/asiancountry.length
            };
            output1.push(Object1);
        }
    fs.writeFile('../outputdata/Male_Female_Expentency.json', JSON.stringify(output1));
});
return 'JSON written successfully';
};
// End of write into the json file when the read is finished
