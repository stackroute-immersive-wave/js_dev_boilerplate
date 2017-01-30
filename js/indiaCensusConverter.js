<<<<<<< HEAD
module.exports = function convertCsv(startYear){
	if(typeof startYear !== 'number' || isNaN(startYear))
		throw new Error('Not a number');
	const fs = require('fs');
	const readline = require('readline');

	var convertWithStream = () =>{
		var readStream = fs.createReadStream('../../inputdata/India2011_Merge_csv.csv');

		var rli = readline.createInterface({
			input:readStream,
			terminal:false
		});
		var linenumber = 0;
		var jsonArray = [];
		rli.on('line', (line) => {
			if(linenumber === 0){
				linenumber += 1;
			}
			else{
				let values = line.split(',');
				if(jsonArray.length > 0)
				{
					let agegroupFound = false;
					for(let json of jsonArray){
						if(json.AgeGroup === values[5] && values[5] !== 'All ages' && values[4] === 'Total'){
							json.LiteratePopulation = Number(json.LiteratePopulation)+Number(values[12]);
							agegroupFound = true;
							break;
						}
					}
					if(!agegroupFound  && values[5] !== 'All ages' && values[4] === 'Total'){
						let json = {'AgeGroup':values[5],'LiteratePopulation': values[12]};
						jsonArray.push(json);

					}
				}
				else{
					if(values[5] !== 'All ages' && values[4] === 'Total')
					{
					let json = {'AgeGroup' : values[5], 'LiteratePopulation' : values[12]};
	        		jsonArray.push(json);
	        		}
				}
			}
		});
		rli.on('close', () =>  fs.writeFileSync('json1.json', JSON.stringify(jsonArray)));
	}
	convertWithStream();
	return 'JSON written successfully';
};
=======
module.exports = function convertcsv(startYear)
{
  if(typeof startYear !== 'number' || isNaN(startYear))
  {
        throw new Error('Not a number');
  }

const fs = require('fs');
const readline = require('readline');
let convertWithStream1 = () => {
  let readStream = fs.createReadStream('../inputdata/India2011 (6).csv');
  let rli = readline.createInterface({
    input: readStream,
    terminal: false
  });
  let linenumber = 0;
  let jsonArray = [];
  let x;
  rli.on('line', (line) => {
    /*eslint-disable */
    if(linenumber === 0) {
       x = line;
       // console.log(x);
      linenumber += 1;
    }
    else{
      if (line === x) { }
        else{
            let values = line.split(',');
            if(jsonArray.length > 0)
            {
              let agegroupFound = false;
               for(let json of jsonArray)
              {
                if(json.AgeGroup === values[5] && values[5] !== 'All ages' && values[4] === 'Total')
                  {
                    json.LiteratePopulation = Number(json.LiteratePopulation)+Number(values[12]);
                        agegroupFound = true;
                        break;
                    }
                }
                if(!agegroupFound && values[5] !== 'All ages' && values[4] === 'Total'){
                    let json = {'AgeGroup':values[5],'LiteratePopulation': values[12]};
                    jsonArray.push(json);

                }
            }
            else{
                if(values[5] !== 'All ages' && values[4] === 'Total')
                {
                let json = {'AgeGroup' : values[5], 'LiteratePopulation' : values[12]};
               jsonArray.push(json);
               }
            }
          }
        }
        /*eslint-enable */
    });
rli.on('close', () => fs.writeFileSync('../outputdata/newdata.json', JSON.stringify(jsonArray)));
};
convertWithStream1();
return 'JSON written successfully';
};
>>>>>>> 8beaed2d2b01076a5e69852e788e031d5d2ec80b
