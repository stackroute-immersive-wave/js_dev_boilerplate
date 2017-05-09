module.exports = function convert(startYear)
{
  if(isNaN(startYear))
  {
       throw new Error('Not a number');
  }
  const readline = require('readline');
  const fs = require('fs');

  let data=[];
  let i=0;
  let a=[];
  let cleanedLine;
  let age_group=0;
  let literate_person=0;
  let js;
const rl = readline.createInterface({
//reading the final.csv file
input: fs.createReadStream('../inputdata/final.csv')
});
//reading line by line
rl.on('line', (line) => {
          if(i===0)
          {
           //removing the junk files
           cleanedLine =line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
           data=cleanedLine;
           age_group=data.indexOf('Age-group');
           literate_person=data.indexOf('Literate - Persons');
           i=i+1;
          }

          data=line.split(',');
          if(data[age_group]!=="Age-group"&& data[literate_person]!=="Literate - Persons")
          {
            a.push({"agegroup":data[age_group],"literateperson":data[literate_person]});
          }
          js=JSON.stringify(a);
          fs.writeFile('../outputdata/indiaCensusPradheep.json',js);
      });
    return "JSON written successfully";
};
