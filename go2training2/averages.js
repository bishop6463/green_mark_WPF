//averages




function doCalcAvg(month1, month2, month3, month4, month5)
{<!--  ww w.  ja v a  2s.  co  m-->
    var ans;
    ans = (Number(month1) + Number(month2) + Number(month3) + Number(month4) + Number(month5)) / 5;
    return (ans);
}
//var month1 = prompt("enter February utility bill.");
//console.log(month1);
//var month2 = prompt("enter March utility bill total.");
//console.log(month2);
//var month3 = prompt("enter April utility bill total.");
//console.log(month3);
//var month4 = prompt("enter May utility bill total.");
//console.log(month4);
//var month5 = prompt("enter June utility bill total.");
//console.log(month5);

var month1 = prompt("enter February utility bill.");
console.log(month1);
var month2 = prompt("enter March utility bill total.");
console.log(month2);
var month3 = prompt("enter April utility bill total.");
console.log(month3);
var month4 = prompt("enter May utility bill total.");
console.log(month4);
var month5 = prompt("enter June utility bill total.");
console.log(month5);
numAvg = doCalcAvg(month1, month2, month3, month4, month5);
alert("The average of the four numbers you entered is: " + numAvg);
