//Green_mark_conditionals assignment
// 2 arithmetic operators addition and subtraction, addition and multiplication
//2 conditional statements at least one most contain an "else if" statement
//at least 1 ternary statement
//at least 1 logical operator && || or !
//must contain at least 3 user prompts that are used in calculations
//all prompts must be validated

/*

/*
 //video homework and examples
 */

//condition



//math expressions:
// > greater than < less than >= greater than or equal to
// <= less than or equal to != not equal == equal to
// = is for assignment, putting a value into a variable
// == is for comparing the values (comparitive operators)


//sunny = true
//temp = 82;
//    goToTheBeach();
//}else{
//   goToTheMovies()
//}
//if(temp >70){
//    goToTheBeach();
//}
//nesting conditionals

//if(sunny){
//    goToTheBeach();

//    if(warmWater){
//    wearNewSuit();
//}
//}else{
//    goToTheMovies();
//}
//conditional logic

//var oldEnough = false; //boolean logic
// if the child is old enough, print to the console "you can ride!'
//if(oldEnough){
//code performed if condition is true
//    console.log("you can ride!");
//}
//console.log("what comes after?");

//rational expressions

//var kidHeight = 30;
//var minHeight = 48;
// if the child is over 48 inches "you can ride!'
//if(kidHeight > 48) {
//code performed if condition is true
//    console.log("you can ride the coaster!")
//}

//conditional logic with an expression
/*
 var kidHeight = 47;
 var minHeight = 48;
 var sneakerLift = 2;


 // if the child is over 48 inches "you can ride!'
 //if(kidHeight + sneakerLift > minHeight) {//note the difference with the addition of sneakerLift
 //code performed if condition is true
 //   console.log("you can ride the coaster!")
 //}

 // if and else

 if(kidHeight > minHeight){

 console.log("you can ride the coaster");
 }else {

 ////if(kidHeight <= minHeight){// this part can be replaced by "else" this simplifies the statement and
 //is prone to fewer errors
 console.log("sorry you have some growing to do");
 //}
 }

 //else if
 // this is used if there are three or more choices that can be made in the programming

 var kidHeight = 47;
 var minHeight = 48;
 var wParentHeight = 45;// the height of the kid with parent
 if(kidHeight > minHeight){
 //you can ride
 console.log("you can ride the coaster");
 //else if will always have a condition
 }else if(kidHeight > wParentHeight){
 console.log("you can ride, but only with a parent present.");
 //you can ride with a parent present
 console.log("sorry you have some growing to do");
 //sorry you have some growning to do
 }

 //rational operators
 //greater than >
 //less than <
 // *** never break an operator with a space ***
 //greater than or equal to >=
 //less than or equal to <=
 // used to compare to (only two) variables only
 //the comparison results in TRUE or FALSE.

 //EQUALITY OPERATORS
 //equality ==
 //strict equality ===
 //inequality (not equal) !=
 //these come up with a true or a false, just like rational operators

 //example 5 < 8 boolean operator would say this is true
 //example var a = 12;
 // a > 20 boolean operator would say this is false
 // 5 < 5 = false
 // 5<= 5 = true
 //statements that are logically the same:
 //a > b, b < a


 //equality
 // uses the == operator (no spaces)
 // "the same value as"
 // a ==b
 // *** remember ***
 // equality == compares two values
 // assignment = stores values

 // a == b translation "this is A is the same as B"
 // a = b translation "B will overwrite the value A, replacing A with B"
 // *** "A stores the value of B" it changes the value of A

 // strict equality
 // uses the == operator
 // "the same value" AND "the same type"
 //example:
 // 6 number
 //"6" string
 // 6 == "6" true
 // 6 === "6" false
 // *** will always use strict equality in class ***

 //inequality
 // uses the != operator
 // "is not the same as"
 // a != b  use id we want to say "do this task only if a does not equal b"

 //logical operators
 // used for:
 // compare two true or false statements
 // they compare pairs of relational expressions
 // the comparison results in true or false
 // *** logical operators go in between boolean operators or comparisons ***
 // symbols:
 // and = && ** requires the pair of boolean values both be true in order the entire pair be true **
 //      truth table for &&
 //      | true && true   | True |
 //      | true && false  | False|
 //      | false && true  | False|
 //      | false && false | False|


 //conditional logic - logical operators
 // or ||
 //exclusive or (XOR) = ^
 // not = !
 /*
 var budget = 300;
 var iPhpnePrice = 199.99;
 var payCheck = 200;

 // if the price of the phone is less than our budget
 // by doing it this way, the print out will be both options which is wrong.
 //if(iPhpnePrice < budget){
 //  console.log("we can buy the phone!");
 //}else{
 //  console.log("no phone for you");
 //}
 //if(payCheck > 300){
 //  console.log("we can buy the phone!")
 //}else{
 //  console.log("no phone for you!");
 // by doing it this way, the print out will be both options which is wrong.
 //}

 // this is the correct way to get one or the other:
 if(iPhpnePrice < budget && payCheck > 300){// added the && in between two rational expressions
 console.log("we can buy the phone!");
 }else{
 console.log("no phone for you");
 }
 // second if else has been erased

 // or || operator
 // requires at least one of the pair to be true for the whole pair to be true
 //      truth table for ||
 //      | true || true   | True |
 //      | true || false  | true |
 //      | false || true  | true |
 //      | false || false | False|

 /*var budget = 100;
 var iPhonePrice = 199.99;
 var wonLottery = true;

 if(iPhpnePrice < budget || wonLottery === true ){// using the strict equality operator
 console.log("we can buy the phone!");
 }else{
 console.log("no phone for you");
 }
 */
//exclusive or (XOR) = ^ only one of the pair can be true for the entire to be true
// also wont be used in class
//      truth table for ^
//      | true ^ true   | false|
//      | false ^ false | False|

// not = ! flips a value
// true becomes false and false becomes true
// not used for comparison
// if more than one are true, the result is FALSE
// the ! operator negates
// turns true to false and vice versa
// a != b is the same as !(a===b)
// a<b the same as !(a<b)

// common misconceptions:
// how do we see if a, b and c all have the same value?
// a === b === c  *** this will not work properly ***
// a === b && b === c *** this is the correct way ***
// if both of these pairs are true then the whole thing will be true and also, if one of the pairs is false
// then the whole thing will be false.
// *** things to remember ***
// rational operators go in between pairs off objects
// logical operators ( and && and or ||) go in between rational expressions or boolean values
// always work in pairs

//Condtitional logic - ternaries operators

/*if(condition){
 do if true;
 }else{
 do if false;
 }
 (condition) ? do if true : do if false// same as above

 var gpa = 48;{
 // gpa is over the min 2.0 score, the student can graduate

 if(gpa > 2.0){
 console.log ("you can graduate!");
 }else{
 console.log("gpa is too low!");
 }
 (gpa > 2.0) ? console.log ("you can graduate!") : console.log("gpa too low!"); //Same as above only simplified
 */
/*
 var age = 11;
 var book;
 //if the child is under 10, they get green eggs and ham, otherwise they get HG Wells

 if(age <10){
 book = "green eggs and ham";
 }else{
 book = "time machine";
 }
 /*console.log(book);*/
/*var age = 11;
 var book;
 book(age<10) ? "green eggs and ham" : "the time machine";
 console.log(book);
 // this shortens the previous condition statements and makes it easier and quicker to complete
 */

//week 3 video work




//alert("javascript works");
//variables
/*
 var mpg = 20; //string variables with address
 var gauge = .50; // number vairable
 var tank = 15
 var mileage = false; // boolean indicating mileage

 //outputs
 //string with escapes
 ///console.log(" i live at" + myAddress + ".");
 //console.log("i shop at" + myFavoriteStore + ".");
 //console.log("its only" + milesToStore + "miles to the store");
 //console.log("it is" + construction + "that there is construction enroute.");
 mileage = (guage * tank * mpg);
 //prompts for input
 // confirm - returns either true or false
 if(mileage === true){
 var extraMiles = prompt("how many more miles is it to the store?", "3");
 extraMiles = parseFloat(extraMiles);
 if (extraMiles >=3){
 extraMiles = extraMiles + milesToStore;
 console.log("total miles will be" + extraMiles + ".")
 }else{

 }

 //this code runs if construction is true and extra miles is >=3
 console.log("Yes, there is still construction.")
 }else{
 //this code runs if construction is not true or false
 console.log("no, the road ahead is clear")
 }

 /*


 var mileage = 20;
 var guage = .50;
 var tank = 12;
 var totalMiles = false;
 totalMiles = parseFloat(mileage * tank/guage)

 construction = confirm("Do you have half a tank or more? Ok for YES or CANCEL for NO");
 if(construction === true) {
 if (extraMiles >=3){
 extraMiles = extraMiles + milesToStore;
 console.log("total miles will be" + extraMiles + ".")
 }else{
 console.log("Yes you can make it without stopping for gas!"){

 console.log("You only have approximately" + mileage + "gallons of gas in your tank, better get gas now while you can");

 }



 */

//video homework and examples

//condition



//math expressions:
// > greater than < less than >= greater than or equal to
// <= less than or equal to != not equal == equal to
// = is for assignment, putting a value into a variable
// == is for comparing the values (comparitive operators)


//sunny = true
//temp = 82;
//    goToTheBeach();
//}else{
//   goToTheMovies()
//}
//if(temp >70){
//    goToTheBeach();
//}
//nesting conditionals

//if(sunny){
//    goToTheBeach();

//    if(warmWater){
//    wearNewSuit();
//}
//}else{
//    goToTheMovies();
//}
//conditional logic

//var oldEnough = false; //boolean logic
// if the child is old enough, print to the console "you can ride!'
//if(oldEnough){
//code performed if condition is true
//    console.log("you can ride!");
//}
//console.log("what comes after?");
/*
 var myAddress = "123 elm street"; //string variables with address
 var myFavoriteStore = "\"publix\" supermarket"; //string variable with store name; // the escape character \
 // includes the " in the string
 var milesToStore = 6.5; // number vairable

 var construction = false; // boolean indicating if there's construction
 //prompts for input
 // confirm - returns either true or false
 construction = confirm("is there construction? OK for true or CANCEL for false");
 //boolean conditional
 if(construction === false){
 var extraMiles = prompt("how many more miles is it to the store?", "3");
 if (extraMiles >=3){
 extraMiles = (extraMiles * milesToStore);
 console.log("total miles will be" + extraMiles + ".")
 }else{

 }

 //this code runs if construction is true and extra miles is >=3
 console.log("Yes, there is still construction.")
 }else {
 //this code runs if construction is not true or false
 console.log("no, the road ahead is clear");
 }
 */
/*
//rational expressions
var gasEfficency    = 18;
var gaugeReading    = .50;
var gasTank         = 15;
var gasReserve      = gaugeReading * gasTank
var milesLeft       = gasReserve * gasEfficency;
tank = confirm("Do you have at least a half tank? OK for true or CANCEL for false");
if (tank === false) {
    var gasLeft = prompt("how much do you have left in the tank?", ".50");
    if (gasLeft >= .50) {
        gasReserve = gaugeReading * gasTank;
        console.log("total gas left in the tank is" + milesLeft + ".");{
        }else{
            console.log("this really sucks")
        }
    }
}
console.log("nope, your screwed");

//var kidHeight = 30;
//var minHeight = 48;
// if the child is over 48 inches "you can ride!'
//if(kidHeight > 48) {
//code performed if condition is true
//    console.log("you can ride the coaster!")
//}

//conditional logic with an expression

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;


// if the child is over 48 inches "you can ride!'
//if(kidHeight + sneakerLift > minHeight) {//note the difference with the addition of sneakerLift
//code performed if condition is true
//   console.log("you can ride the coaster!")
//}

// if and else

if(kidHeight > minHeight){

    console.log("you can ride the coaster");
}else {

////if(kidHeight <= minHeight){// this part can be replaced by "else" this simplifies the statement and
    //is prone to fewer errors
    console.log("sorry you have some growing to do");
//}
}

//else if
// this is used if there are three or more choices that can be made in the programming

var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45;// the height of the kid with parent
if(kidHeight > minHeight){
//you can ride
    console.log("you can ride the coaster");
    //else if will always have a condition
}else if(kidHeight > wParentHeight){
    console.log("you can ride, but only with a parent present.");
    //you can ride with a parent present
    console.log("sorry you have some growing to do");
//sorry you have some growing to do
}

//rational operators
//greater than >
//less than <
// *** never break an operator with a space ***
//greater than or equal to >=
//less than or equal to <=
// used to compare to (only two) variables only
//the comparison results in TRUE or FALSE.

//EQUALITY OPERATORS
//equality ==
//strict equality ===
//inequality (not equal) !=
//these come up with a true or a false, just like rational operators

//example 5 < 8 boolean operator would say this is true
//example var a = 12;
// a > 20 boolean operator would say this is false
// 5 < 5 = false
// 5<= 5 = true
//statements that are logically the same:
//a > b, b < a


//equality
// uses the == operator (no spaces)
// "the same value as"
// a ==b
// *** remember ***
// equality == compares two values
// assignment = stores values

// a == b translation "this is A is the same as B"
// a = b translation "B will overwrite the value A, replacing A with B"
// *** "A stores the value of B" it changes the value of A

*/

var blah = "this might be fun!";
var blahBlah = 10.5;
var boolean = false;

//outputs
console.log("I really dont like this at all");
console.log("this class sucks.");
console.log("something witty!");

//confirm returns either true or false

boolean = confirm("knock knock.");

if(boolean === false){

    //this runs if boolean is false
    var blah = prompt("wanna hear a joke?", "3");
    blah = parseFloat(blah);

    if(blah >= 3) {
        //this code runs if boolean is true AND blah >= 3
        console.log("whos there?");
    }else{
        //this code runs if boolean is true and blah < 3
    }
}else{
    console.log("NO! i suck at telling jokes");
}