/* csv to json for female and male catagory */

/* creating a interface to read the file */
let fs = require('fs');
let re = require('readline');
let lineReader = re.createInterface({
    input: fs.createReadStream('../indicators.csv')
});

/* insializing variables */
let indexCountry = '';
let indexindicatorcode = '';
let indexyear = 0;
let indexvalue = 0;
let count = 0;
let output1 = [];
let sum = 0;
let sum1 = 0;
let year = 1960;

/* assign the asian country to array */
// let asiancountry = ["India", "China", "Pakistan", "Thailand", "Singapore",
//     "Philippines", "Israel", "Sri Lanka", "Indonesia", "Iraq"];

let asiancountry = ['Afghanistan', 'Armenia', 'Azerbaijan',
    'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'Cyprus',
    'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan',
    'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives',
    'Mongolia', 'Myanmar (Burma)', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine',
    'Philippines', 'Qatar', 'Russia', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka',
    'Syria', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan',
    'United Arab Emirates (UAE)', 'Uzbekistan', 'Vietnam', 'Yemen'];

/* Reading the csv file line by line */
lineReader.on('line', function(line) {
    let split2 = line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    let Object1 = {};

    /* condition to get index values of required keys */
    if (count === 0) {
        indexCountry = split2.indexOf('CountryName');
        indexindicatorcode = split2.indexOf('IndicatorCode');
        indexyear = split2.indexOf('Year');
        indexvalue = split2.indexOf('Value');
        count = count + 1;
    }

    /* To get the details of the csv file */
    else {
        /* To get the female life expectancy */
        for (let i = 0; i < asiancountry.length; i = i + 1) {
            if (split2[indexCountry] === asiancountry[i] &&
                split2[indexindicatorcode] === 'SP.DYN.LE00.FE.IN') {
                sum = sum + parseFloat(Math.round(split2[indexvalue]));
            }
        }
        /* To get the male life expectancy */
        for (let i = 0; i < asiancountry.length; i = i + 1) {
            if (split2[indexCountry] === asiancountry[i] &&
                split2[indexindicatorcode] === 'SP.DYN.LE00.MA.IN') {
                sum1 = sum1 + parseFloat(Math.round(split2[indexvalue]));
            }
        }

        /* To push the values into object */
        if (year < split2[indexyear] && (split2[indexindicatorcode] === 'SP.DYN.LE00.FE.IN' ||
                split2[indexindicatorcode] === 'SP.DYN.LE00.MA.IN')) {
            Object1 = {

                Year: year,
                'Life expectancy at birth, male (years)': sum1,
                'Life expectancy at birth, female (years)': sum
            };
            // console.log(Object1);
            output1.push(Object1);

            sum = 0;
            sum1 = 0;
            year = year + 1;
        }
        /* End of push the values into object */
    }
    /* End of the details of the csv file */
});
/* End of Reading the csv file line by line */


/* write into the json file when the read is finished */
lineReader.on('close', function() {
  let Object1 = {};
    if (year === 2013) {
        Object1 = {
            Year: year,
            'Life expectancy at birth, female (years)': sum,
            'Life expectancy at birth, male (years)': sum1
        };
        // console.log(Object1);
        output1.push(Object1);
    }
    fs.writeFile('../json/Male_Female_Expentency.json', JSON.stringify(output1));


    // console.log('Male_Female_Expentency.json was created')
});
/* End of write into the json file when the read is finished */
