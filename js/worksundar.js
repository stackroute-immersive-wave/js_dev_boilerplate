module.exports = (country) => {
    // checking for the type of input
    if (!isNaN(country) || typeof country !== 'string') {
        throw new Error('country not found');
    }
    if (isNaN(country)) {
let fs = require('fs');
let countryIndex;
let rl = require('readline');
let saltIndex;
let sugarIndex;
let protienIndex;
let carbohydratesIndex;
let fatIndex;
let givencountry = ['Netherlands', 'Canada', 'United Kingdom', 'United States',
		'Australia', 'France', 'Germany', 'Spain', 'South Africa'];
let northEurope = ['United Kingdom', 'Denmark', 'Sweden Norway'];
let centralEurope = ['France', 'Belgium', 'Germany', 'Switzerland', 'Netherlands'];
let southEurope = ['Portugal', 'Greece', 'Italy', 'Spain', 'Croatia', 'Albania'];
let saltConsumption = new Float32Array(9);
let sugarConsumption = new Float32Array(9);
let northFat = 0;
let southFat = 0;
let centralFat = 0;
let northProtein = 0;
let southProtein = 0;
let centralProtein = 0;
let northCarbohydrate = 0;
let southCarbohydrate = 0;
let centralCarbohydrate = 0;
let title = 0;
let i = 1;
// let fullContent = '';
let f = rl.createInterface({
input: fs.createReadStream('./inputdata/FoodFacts.csv'),
output: process.stdout,
terminal: false
});
    f.on('line', function(c) {
        // fullContent = fullContent + c;
				if(title === 0) {
				let	headings = c.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
					countryIndex = headings.indexOf('countries_en');
					saltIndex = headings.indexOf('salt_100g');
					sugarIndex = headings.indexOf('sugars_100g');
					protienIndex = headings.indexOf('proteins_100g');
					carbohydratesIndex = headings.indexOf('carbohydrates_100g');
					fatIndex = headings.indexOf('fat_100g');
					title = title + 1;
				}
				let line = c.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
				let countryCheckCountry = givencountry.includes(line[countryIndex]);
				let countrycheckNorth = northEurope.includes(line[countryIndex]);
				let countrycheckCentral = centralEurope.includes(line[countryIndex]);
				let countrycheckSouth = southEurope.includes(line[countryIndex]);

				if (countryCheckCountry) {
						let salt = line[saltIndex];
						let sugar = line[sugarIndex];
						if (salt === '') {
								salt = 0;
						}
						if (sugar === '') {
								sugar = 0;
						}

						let currentCountryIndex = givencountry.indexOf(line[countryIndex]);
	saltConsumption[currentCountryIndex] = saltConsumption[currentCountryIndex] + parseFloat(salt);
	sugarConsumption[currentCountryIndex] = sugarConsumption[currentCountryIndex] + parseFloat(sugar);
	}
			if (countrycheckNorth || countrycheckCentral || countrycheckSouth) {
						let fat = line[fatIndex];
						let protein = line[protienIndex];
						let carbohydrates = line[carbohydratesIndex];
						if (fat === '') {
								fat = 0;
						}
						if (protein === '') {
								protein = 0;
						}
						if (carbohydrates === '') {
								carbohydrates = 0;
						}
						if (countrycheckNorth) {
								northFat = northFat + parseFloat(fat);
								northProtein = northProtein + parseFloat(protein);
								northCarbohydrate = northCarbohydrate + parseFloat(carbohydrates);
						}
						if (countrycheckCentral) {
								centralFat = centralFat + parseFloat(fat);
								centralProtein = centralProtein + parseFloat(protein);
								centralCarbohydrate = centralCarbohydrate + parseFloat(carbohydrates);
						}
						if (countrycheckSouth) {
								southFat = southFat + parseFloat(fat);
								southProtein = southProtein + parseFloat(protein);
								southCarbohydrate = southCarbohydrate + parseFloat(carbohydrates);
						}
				}
    });
		let jsonArray1 = [];
		let jsonArray2 = [];

    f.on('close', function() {
				i = 0;

        givencountry.forEach(function() {
            let objPart1 = {};
            objPart1.country = givencountry[i];
            objPart1.salt = saltConsumption[i];
            objPart1.sugar = sugarConsumption[i];
            jsonArray1.push(objPart1);
  i = i + 1;
      });

        let objNorth = {};
        objNorth.countryName = 'northEurope';
        objNorth.northFat = northFat;
        objNorth.northProtein = northProtein;
        objNorth.northCarbohydrate = northCarbohydrate;
        jsonArray2.push(objNorth);

        let objCentral = {};
        objCentral.countryName = 'centralEurope';
        objCentral.centralFat = centralFat;
        objCentral.centralProtein = centralProtein;
        objCentral.centralCarbohydrate = centralCarbohydrate;
        jsonArray2.push(objCentral);

        let objSouth = {};
        objSouth.countryName = 'southEurope';
        objSouth.southFat = southFat;
        objSouth.southProtein = northProtein;
        objSouth.southCarbohydrate = southCarbohydrate;
        jsonArray2.push(objSouth);
        fs.writeFile('part1.json', JSON.stringify(jsonArray1));
        fs.writeFile('part2.json', JSON.stringify(jsonArray2));
    });
}
return 'JSON written successfully';
};
