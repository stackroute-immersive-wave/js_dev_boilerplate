/*eslint-disable*/
const readline = require('readline');
const fs = require('fs');
module.exports = function convert(startYear)
{

	if(typeof startYear=='string')
	{
		return "";
	}

if(typeof startYear !== 'number' || isNaN(startYear))
 {
       throw new Error('Not a number');
 }

var data=[];
var data_1=[];
var i=0,j=0;


var a=[];
var b=[];
var a_json=[];
var b_json=[];

const rl = readline.createInterface({
 input: fs.createReadStream('graph.csv')
});

rl.on('line', (line) => {


if(i==0)
{
   data_1=line.split(',');
   country_index=data_1.indexOf('Country Name');
   population_index=data_1.indexOf('Population (Millions) - 2013');
   gdp_index=data_1.indexOf('GDP Billions (US$) - 2013');
   i++;
}

data_1=line.split(',');

a.push({"country":data_1[country_index],"gdp":data_1[gdp_index]});
  b.push({"country":data_1[country_index],"population":data_1[population_index]});



});
setTimeout(function(){
a.push();
b.push();
a.shift();
b.shift();

//console.log(a);
//console.log(b);

a_json=JSON.stringify(a);
b_json=JSON.stringify(b);
//console.log(a[1].country);
console.log(a_json);
console.log(b_json);
},500);

return 'JSON written successfully';
 };//console.log(`Line from file: ${line}`);


//   .on('close', () => {
//   console.log('Have a great day!');
//   process.exit(0);
// });