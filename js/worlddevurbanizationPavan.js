/*eslintrc disable*/
const fs=require('fs');
module.exports = function convert(startYear)
{
var lineReader = require('readline').createInterface({
 input: fs.createReadStream('Indicators.csv')
});
var objarr=[];
lineReader.on('line', function (line) {
    var l=line;
    var linearr=l.split(',');
    if(linearr[1]=="IND")
    {
        var obj={};
        if(linearr[3]=="SP.URB.TOTL.IN.ZS")
        {
        obj["country"]=linearr[0];
        obj["urban_pop"]=linearr[5];
        obj["year"]=linearr[4];
        objarr.push(obj);
        }
        if(linearr[3]=="SP.RUR.TOTL.ZS")
        {
        obj["country"]=linearr[0];
        obj["rural_pop"]=linearr[5];
        obj["year"]=linearr[4];
        objarr.push(obj);
        }
    }
});
if(isNaN(startYear))
 {
       throw new Error('Not a number');
 }
 var jsobj;
lineReader.on('close',function(line)
{
	var jsarr=[];
		for(i=0;i<objarr.length;i=i+2)
		{
		if(objarr[i].year==objarr[i+1].year)
			{
			objarr[i].urban_pop=objarr[i+1].urban_pop;
			jsarr.push(objarr[i]);
			}
		}
		jsobj=JSON.stringify(jsarr);
		console.log(jsobj);
        fs.writeFile("../outputdata/Outputfile.json",jsobj);
});

    return "JSON written successfully";
};

