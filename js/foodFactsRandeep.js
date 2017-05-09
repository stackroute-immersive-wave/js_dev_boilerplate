module.exports = function convert(startYear)
{
	if(isNaN(startYear))
	{
		throw new "Not a number";
	}
	else
	{
		var csv = require("fast-csv");
		var readLine = require('readline');
		var fs = require("fs");


		const col1 = "sugars_100g";
		const col2 = "salt_100g";
		const col3 = "countries";

		var arr = [];
		var i=0;
		var idx1 = null;
		var idx2 = null;
		var idx3 = null;
		//var keyLine = null;


		var readStream = fs.createReadStream("../foodFacts.csv");

		var lineReader = readLine.createInterface({
  		input: readStream
		});


		lineReader.on("line",function(line)
 		{
 			if(i==0)
 			{
 				var cleanedLine = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
 				var data = cleanedline.split(",");
 				//keyLine = keyLine || data;
 				idx1 = data.indexOf(col1);
 				idx2 = data.indexOf(col2);
 				idx3 = data.indexOf(col3);
 				//var c = data[0];

 				i++;
 			}

 			data=line.split(",");


 			arr.push({"Country": data[idx3] , "sugar_and_salt_consumption": (data[idx1]+data[idx2])});
			var record = JSON.stringify(arr);
			fs.writeFile("../outputdata/foodFactsRandeep.json", record);
			console.log(record);

		});


		lineReader.close("line", function(line)
		{
			console.log("File closed");
		});


		return "JSON written successfully";


	}

};