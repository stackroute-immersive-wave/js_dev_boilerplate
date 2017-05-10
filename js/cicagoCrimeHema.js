module.exports = function convert(startYear)
 {
if(isNaN(startYear)) {
 throw new Error('not an number');
}
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('../inputdata/crimedata.csv')
});

let daTa1 = [];
let i = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0; let count6 = 0;
let count7 = 0; let count8 = 0; let count9 = 0; let count10 = 0;
let count11 = 0; let count12 = 0; let count13 = 0;
let count14 = 0; let count15 = 0; let count16 = 0;

let count01 = 0;
let count02 = 0;
let count03 = 0;
let count04 = 0;
let count05 = 0; let count06 = 0; let count07 = 0;
let count08 = 0; let count09 = 0; let count010 = 0;
let count011 = 0; let count012 = 0; let count013 = 0;
let count014 = 0; let count015 = 0; let count016 = 0;

let count001 = 0;
let count002 = 0;
let count003 = 0;
let count004 = 0;
let count005 = 0; let count006 = 0; let count007 = 0;
let count008 = 0; let count009 = 0; let count0010 = 0;
let count0011 = 0; let count0012 = 0; let count0013 = 0;
let count0014 = 0; let count0015 = 0; let count0016 = 0;

let count0001 = 0;
let count0002 = 0;
let count0003 = 0;
let count0004 = 0;
let count0005 = 0; let count0006 = 0; let count0007 = 0;
let count0008 = 0; let count0009 = 0; let count00010 = 0;
let count00011 = 0; let count00012 = 0; let count00013 = 0;
let count00014 = 0; let count00015 = 0; let count00016 = 0;

let daTearr = [];
let deScindex = 0;
let daTeindex = 0;
let arRestindex = 0;
let arRestarray = [];
let alLdata = [];
let prOcessing = [];
let y1 = [];
let y2 = [];
let v1 = [];
let y11 = [];
let y12 = [];
let v2 = [];
let v = [];
let av = [];
rl.on('line', (data) => {
if(i === 0) {
            alLdata = data.split(',');
            daTa1 = alLdata;
            deScindex = daTa1.indexOf('Description');
            daTeindex = daTa1.indexOf('Date');
            arRestindex = daTa1.indexOf('Arrest');
            i = i + 1;
        }
        daTa1 = data.split(',');
        /*eslint-disable*/daTearr = parseInt(daTa1[daTeindex].substring(6, 10));
        prOcessing.push({year: daTearr, thEftdesc: daTa1[deScindex]});
        arRestarray.push({year: daTearr, arRestdesc: daTa1[arRestindex]});
    });


function getval(a) {
    for(i = 0; i < a.length; i = i + 1) {
        if(a[i].thEftdesc === '$500 AND UNDER') {
            y1.push(a[i].year);
        }
        else if(a[i].thEftdesc === 'OVER $500') {
            y2.push(a[i].year);
        }
    }
   for(i = 0; i < y1.length; i = i + 1)
   {
        if(y1[i] === 2001) {
           count1 = count1 + 1;
        }
        else if(y1[i] === 2002) {
            count2 = count2 + 1;
        }
         else if(y1[i] === 2003) {
            count3 = count3 + 1;
        }
         else if(y1[i] === 2004) {
            count4 = count4 + 1;
        }
        else if(y1[i] === 2005) {
            count5 = count5 + 1;
        }
        else if(y1[i] === 2006) {
            count6 = count6 + 1;
        }
        else if(y1[i] === 2007) {
            count7 = count7 + 1;
        }
        else if(y1[i] === 2008) {
            count8 = count8 + 1;
        }
        else if(y1[i] === 2009) {
            count9 = count9 + 1;
        }
        else if(y1[i] === 2010) {
            count10 = count10 + 1;
         }
        else if(y1[i] === 2011) {
            count11 = count11 + 1;
        }
        else if(y1[i] === 2012) {
            count12 = count12 + 1;
        }
        else if(y1[i] === 2013) {
            count13 = count13 + 1;
        }
        else if(y1[i] === 2014) {
            count14 = count14 + 1;
        }
        else if(y1[i] === 2015) {
            count15 = count15 + 1;
        }
        else if(y1[i] === 2016) {
            count16 = count16 + 1;
        }
   }
  for(i = 0; i < y2.length; i = i + 1)
   {
        if(y2[i] === 2001) {
           count01 = count01 + 1;
        }
        else if(y2[i] === 2002) {
            count02 = count02 + 1;
        }
         else if(y2[i] === 2003) {
            count03 = count03 + 1;
        }
         else if(y2[i] === 2004) {
            count04 = count04 + 1;
        }
        else if(y2[i] === 2005) {
            count05 = count05 + 1;
        }
        else if(y2[i] === 2006) {
            count06 = count06 + 1;
        }
        else if(y2[i] === 2007) {
            count07 = count07 + 1;
        }
        else if(y2[i] === 2008) {
            count08 = count08 + 1;
        }
        else if(y2[i] === 2009) {
            count09 = count09 + 1;
        }
        else if(y2[i] === 2010) {
            count010 = count010 + 1;
        }
        else if(y2[i] === 2011) {
            count011 = count011 + 1;
        }
        else if(y2[i] === 2012) {
            count012 = count012 + 1;
        }
        else if(y2[i] === 2013) {
            count013 = count013 + 1;
        }
        else if(y2[i] === 2014) {
            count014 = count014 + 1;
        }
        else if(y2[i] === 2015) {
            count015 = count015 + 1;
        }
        else if(y2[i] === 2016) {
            count016 = count016 + 1;
        }
}
  v1.push({year: 2001, thEftOver: count1, thEftabove: count01});
  v1.push({year: 2002, thEftOver: count2, thEftabove: count02});
  v1.push({year: 2003, thEftOver: count3, thEftabove: count03});
  v1.push({year: 2004, thEftOver: count4, thEftabove: count04});
  v1.push({year: 2005, thEftOver: count5, thEftabove: count05});
  v1.push({year: 2006, thEftOver: count6, thEftabove: count06});
  v1.push({year: 2007, thEftOver: count7, thEftabove: count07});
  v1.push({year: 2008, thEftOver: count8, thEftabove: count08});
  v1.push({year: 2009, thEftOver: count9, thEftabove: count09});
  v1.push({year: 2010, thEftOver: count10, thEftabove: count010});
  v1.push({year: 2011, thEftOver: count11, thEftabove: count011});
  v1.push({year: 2012, thEftOver: count12, thEftabove: count012});
  v1.push({year: 2013, thEftOver: count13, thEftabove: count013});
  v1.push({year: 2014, thEftOver: count14, thEftabove: count014});
  v1.push({year: 2015, thEftOver: count15, thEftabove: count015});
  v1.push({year: 2016, thEftOver: count16, thEftabove: count016});
return v1;
}


function getarrest(a1) {
for(i = 0; i < a1.length; i = i + 1) {
        if(a1[i].arRestdesc === 'false') {
            y11.push(a1[i].year);
        }
        else if(a1[i].arRestdesc === 'true') {
            y12.push(a1[i].year);
        }
    }
    for(i = 0; i < y11.length; i = i + 1)
   {
        if(y11[i] === 2001) {
           count001 = count001 + 1;
        }
        else if(y11[i] === 2002) {
            count002 = count002 + 1;
        }
         else if(y11[i] === 2003) {
            count003 = count003 + 1;
        }
         else if(y11[i] === 2004) {
            count004 = count004 + 1;
        }
        else if(y11[i] === 2005) {
            count005 = count005 + 1;
        }
        else if(y11[i] === 2006) {
            count006 = count006 + 1;
        }
        else if(y11[i] === 2007) {
            count007 = count007 + 1;
        }
        else if(y11[i] === 2008) {
            count008 = count008 + 1;
        }
        else if(y11[i] === 2009) {
            count009 = count009 + 1;
        }
        else if(y11[i] === 2010) {
            count0010 = count0010 + 1;
        }
        else if(y11[i] === 2011) {
            count0011 = count0011 + 1;
        }
        else if(y11[i] === 2012) {
            count0012 = count0012 + 1;
        }
        else if(y11[i] === 2013) {
            count0013 = count0013 + 1;
        }
        else if(y11[i] === 2014) {
            count0014 = count0014 + 1;
        }
        else if(y11[i] === 2015) {
            count0015 = count0015 + 1;
        }
        else if(y11[i] === 2016) {
            count0016 = count0016 + 1;
        }
   }
   for(i = 0; i < y12.length; i = i + 1)
   {
        if(y12[i] === 2001) {
           count0001 = count0001 + 1;
        }
        else if(y12[i] === 2002) {
            count0002 = count0002 + 1;
        }
         else if(y12[i] === 2003) {
            count0003 = count0003 + 1;
        }
         else if(y12[i] === 2004) {
            count0004 = count0004 + 1;
        }
        else if(y12[i] === 2005) {
            count0005 = count0005 + 1;
        }
        else if(y12[i] === 2006) {
            count0006 = count0006 + 1;
        }
        else if(y12[i] === 2007) {
            count0007 = count0007 + 1;
        }
        else if(y12[i] === 2008) {
            count0008 = count0008 + 1;
        }
        else if(y12[i] === 2009) {
            count0009 = count0009 + 1;
        }
        else if(y12[i] === 2010) {
            count00010 = count00010 + 1;
        }
        else if(y12[i] === 2011) {
            count00011 = count00011 + 1;
        }
        else if(y12[i] === 2012) {
            count00012 = count00012 + 1;
        }
        else if(y12[i] === 2013) {
            count00013 = count00013 + 1;
        }
        else if(y12[i] === 2014) {
            count00014 = count00014 + 1;
        }
        else if(y12[i] === 2015) {
            count00015 = count00015 + 1;
        }
        else if(y12[i] === 2016) {
            count00016 = count00016 + 1;
        }
   }
  v2.push({year: 2001, NotArrest: count001, arRest: count0001});
  v2.push({year: 2002, NotArrest: count002, arRest: count0002});
  v2.push({year: 2003, NotArrest: count003, arRest: count0003});
  v2.push({year: 2004, NotArrest: count004, arRest: count0004});
  v2.push({year: 2005, NotArrest: count005, arRest: count0005});
  v2.push({year: 2006, NotArrest: count006, arRest: count0006});
  v2.push({year: 2007, NotArrest: count007, arRest: count0007});
  v2.push({year: 2008, NotArrest: count008, arRest: count0008});
  v2.push({year: 2009, NotArrest: count009, arRest: count0009});
  v2.push({year: 2010, NotArrest: count0010, arRest: count00010});
  v2.push({year: 2011, NotArrest: count0011, arRest: count00011});
  v2.push({year: 2012, NotArrest: count0012, arRest: count00012});
  v2.push({year: 2013, NotArrest: count0013, arRest: count00013});
  v2.push({year: 2014, NotArrest: count0014, arRest: count00014});
  v2.push({year: 2015, NotArrest: count0015, arRest: count00015});
  v2.push({year: 2016, NotArrest: count0016, arRest: count00016});
return v2;
   }

rl.on('close', () => {
v = getval(prOcessing);
fs.writeFile('chicagocrimewrite.json', JSON.stringify(v));
av = getarrest(arRestarray);
fs.writeFile('chicagocrimewritearrest.json', JSON.stringify(av));
});
return 'JSON written successfully';
};
