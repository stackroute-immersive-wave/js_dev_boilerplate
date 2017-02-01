let fs = require('fs');
let log4js = require('log4js');
let logger = log4js.getLogger();
function ReadAppend(file, appendFile) {
    fs.readFile(appendFile, function(err, data) {
        if (err) {
            logger.debug('File was not Read');
            throw err;
        }
        logger.debug('File was Read');

        fs.appendFile(file, data, function(err1) {
            logger.debug('File');
            if (err1) {
                logger.debug('File was not append');
                throw err1;
            }
            logger.debug('The "data to append" was appended to a file');
        });
    });
}

let file = './outputdata/India2011Merge.csv';
let appendFile = './inputdata/India2011.csv';
//
//   //appendFile='./inputdata/IndiaSC2011.csv';
//
// appendFile='./inputdata/India2011.csv';
 ReadAppend(file, appendFile);
