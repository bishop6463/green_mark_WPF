
var mileage = 20;
var gauge = .50;
var tank = 12;
tankTotal = tank * gauge;

totalMiles = tankTotal * mileage;

gauge = confirm("Do you have half a tank or more? Ok for YES or CANCEL for NO");
if(tankTotal === false){
    var extraMiles = prompt("How full is your gas tank?" ,".50");
    tankTotal = parseFloat(tankTotal);
    if (tankTotal >=.50){
        console.log("Yes, you can make it without stopping for gas")

        }else{
    }
}
            console.log("You only have" + " " + totalMiles + " " + "worth of gas left.")


