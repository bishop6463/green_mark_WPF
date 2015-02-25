//this crap sucks

// coding example
//prompts and confirms
//different conditionals
// validating data with conditionals
//show alternate outcomes with conditionals

/*
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
    //this is the second part of the conditional
    var myEmptyString = prompt("what store do you want to go to?");
    if(myEmptyString === ""){
        console.log("hey you didnt enter anything");
    }else{
        console.log("lets go there");
    }

}
*/
/*
var savings = 1200;
var computer = 1800;
var paycheck = true;

var grandmaGift = false;


var paycheck = false; // boolean indicating if there's construction
//prompts for input
// confirm - returns either true or false
paycheck = confirm("Is your check more than $800.00? OK for true or CANCEL for false");
//boolean conditional
    if(paycheck === false) {

        var checkAmount = prompt("How much do you have to add to your savings?", "1200");
        if (checkAmount >=600){
            checkAmount = (checkAmount * savings);
            console.log("total miles will be" + checkAmount + ".")
        }else{
    console.log("you dont have enough.")

}
            console.log("Sorry you you will need" + "more to save")

}
*/
/*
var computer = 1800;
var payCheck = false;
var savings = 1200.00;
checkAmount = confirm("Did you get paid today? OK for true or CANCEL for false");
if(checkAmount === false);
console.log("Go make some money!")

if(payCheck === false) {
    var payCheck = prompt("how many more miles is it to the store?", "600");
    payCheck = parseFloat(payCheck);
    if (payCheck < 600)
        payCheck = (payCheck + savings);
    console.log("total miles will be" + payCheck + ".");
*/

/*

 //if the child is under 10, they get green eggs and ham, otherwise they get HG Wells

var age = 11;
 var book;
 book(age<10) ? "green eggs and ham" : "the time machine";
 console.log(book);
 // this shortens the previous condition statements and makes it easier and quicker to complete


//if the price of the computer is less than our savings and paycheck

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
    */
/*
var a = 3;
a = a * 4;
console.log(a)
    *//*
//casting
var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result);
*/
/*
var quiz1 = 39;
var quiz2 = 58;
var quiz3 = 100;
var quiz4 = 100;

var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
console.log (average);
*/
var savings = 1200;
var computerCost = 1800;

payCheck = confirm("did you get a paycheck this week? OK for true or CANCEL for false");
if(payCheck ===false){
    console.log("Your gonna need money to buy that computer silly")
} else {
    console.log("That shiny new computer costs 1800.00");
    var userInput = prompt("how much was your paycheck this week?");
    userInput = parseInt(userInput);
    console.log(userInput);
    total = (userInput + savings) - computerCost;
    if(total >= computerCost)
    console.log("congrats, lets get some cookies too!")
    console.log("Almost there, you are" + " " + "$" + total + " " + "short of your goal.");
}





/*


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
*/