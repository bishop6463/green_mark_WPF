//average shopping bill


var week1 = 127.08;//sets up variable 1
var week2 = 142.88;//sets up variable 2
var week3 = 203.77;//sets up variable 3
var week4 = 188.82;//sets up variable 4
var week5 = 167.69;//sets up variable 5
var weekTotal = (week1 + week2 + week3 + week4 + week5);//variables add upp
var weekAverage = (week1 + week2 + week3 + week4 + week5)/5;//order of operation () then /
console.log(weekAverage);//prints it out to the console
var result = "You" + " " + "spent" + " " + "a" + " " + "total" + " " +  "of" + " " +  "$" + weekTotal + " " + "on" + " " +  "groceries" + " " +  "over" + " " +  "5"  + " " + "weeks."  + " " + "That" + " " +  "is" + " " +  "an"  + " " + "average"  + " " + "of" + " " +  "$" + weekAverage  + " " + "per" + " " +  "week.";
alert(result);//displays a pop up of the answer

