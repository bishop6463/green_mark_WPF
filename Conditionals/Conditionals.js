
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
        console.log("this fucking suck")
        }
    }
    }
    console.log("nope, your screwed");











