//expressions assignment

function Average (month1, month2, month3, month4){//function is a keyword (average) is the functions name. month1, month2 etc are the parameters it will accept.

    result = (Number(month1) + Number(month2) + Number(month3) + Number(month4))/ 4;//using "result" gives the rules on how to calculate
    return result;//return will send the results back to the script
}
var month1 = prompt("enter February utility bill.");//this creates the user input prompts it also apples to lines 10,12 and 14
console.log(month1);//this sends records the input to the console. this applies to lines 11,13,15 also
var month2 = prompt("enter March utility bill total.");
console.log(month2);
var month3 = prompt("enter April utility bill total.");
console.log(month3);
var month4 = prompt("enter May utility bill total.");
console.log(month4);

score = Average(month1, month2, month3, month4); //this averages the user input and saves them in the variable called score

var result = "your" + " " + "monthly" + " " + "average" + " " + "utility" + " " + "bill" + " " + " is" + " " + score;
//this creates the pop up message that states the answer to the function i just created.
alert(result);//the alert souttatement is used to display the results of the user input