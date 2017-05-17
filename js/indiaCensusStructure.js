/*Import log4js*/
const log4js = require('log4js');
const logger = log4js.getLogger();
const readline = require('readline');
const fs = require('fs');
let convert = function(year) {
	let final = [];
	let count = 0;
	/* Returns an EventEmitter of type Interface initialized
	with an input read stream with the CSV file */
	const rl = readline.createInterface({
		input: fs.createReadStream('../inputdata/India2011.csv')
	});

	if (isNaN(year)) {
		throw new Error('Not a number');
	}
	/* Call back method gets called on line event emitted
	by Interface for each CSV line being read */
	rl.on('line', (line) => {
		logger.debug(line);
			let arr = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
		if (arr[4] === 'Total' && arr[5] !== 'All ages') {
			let obj = {};
			if (!final[count]) {
				obj['AgeGroup'] = arr[5];
				obj['LiteratePerson'] = parseInt(arr[12], 10);
				final.push(obj);
			} else {
				final[count].LiteratePerson = final[count].LiteratePerson + parseInt(arr[12], 10);
			}
			count = (count + 1) % 28;
		}
	});
	/* Call back method gets called on close event emitted
	by Interface when CSV read is complete is completed */
	rl.on('close', () => {
		let finalJson = JSON.stringify(final);
		fs.writeFile('../outputdata/IndiaCensusAmardeep.json', finalJson, function(err) {
			if (err) {
				throw err;
			}
		});
		});
	return 'JSON written successfully';
};

module.exports = convert;
