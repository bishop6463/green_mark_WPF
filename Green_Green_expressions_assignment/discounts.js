//discounts

var originalPrice = 200.00;//sets up variable 1
var discountAmount = .8;//sets up variable 2
var salesTax = 7;//sets up variable 3
var tax = 11.20;//sets up variable 4

var salePrice = originalPrice * discountAmount;// * is multiplication
var withTax = salePrice + tax; //addition
console.log(originalPrice);//prints it out to the console original price
console.log(salePrice); //prints it out to the console without tax
var result = "Your" + " " + "TV" + " " + "was" + " " + "originally" + " " + "$" +  originalPrice + "," + " " + "but" + " " + "after" + " " + "a" + " " + discountAmount + "%" + " " + "discount" + "," + " " + "it" + " " + "is" + " " + "now" + " " + "$" + salePrice + " " + "without" + " " + "tax" +  "." + " " + "and" + " " + "$" + withTax + " " +  "with" + " " + "tax" + ".";
alert(result);//the alert statement is used to display the results of the user input
console.log(withTax);//prints it out to the console with tax
