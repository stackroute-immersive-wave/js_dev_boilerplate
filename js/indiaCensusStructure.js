const log4js = require('log4js');
const logger = log4js.getLogger();
const readline = require('readline');
const fs = require('fs');
let convert = function(year) {
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
	});
	/* Call back method gets called on close event emitted
	by Interface when CSV read is complete is completed */
	rl.on('close', () => {
		});
	return 'JSON written successfully';
};

module.exports = convert;
