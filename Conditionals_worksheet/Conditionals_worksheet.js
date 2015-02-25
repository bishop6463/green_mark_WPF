//Mark Green 2-18 Conditionals worksheet


//Group 1: Last chance for gas

var mpg = 18;
var gasGauge = .50;
var tankCapacity = 15;
var mileage = (mpg * tankCapacity * gasGauge)
// if the gasGauge is less than .50
if(mpg * tankCapacity > gasGauge){
    console.log("yes you can make it!");
}else{
    if(mpg * tankCapacity < gasGauge){
    console.log("you have" + tankCapacity + "gallons of gas left")
}

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


