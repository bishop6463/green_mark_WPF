//expressions for mathematics

//var a = 2; //sets up our variable a and defines it with 2
//a = a + 3;//add 3 to a
//console.log(a);
//see basic expression html for how to load * SEE <script> line and do this so you don't fail!!

//expressions - age example

//var yearBorn = 1975;
//var age = 2015 - yearBorn - 1;
//console.log(age);

//expressions - arithmetic operators

//area of a triangle is half the width times height

//var width = 5;
//var height = 13;
//var area = width * height/2; // * is multiplication / is division

//console.log(area);


//expressions - modulo operator

//var remainder = 32 % 10;
//console.log(remainder);

//expressions - pemdas order of operations

//var quiz1 = 87;
//var quiz2 = 98;
//var quiz3 = 78;
//var quiz4 = 96;

//var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;

//console.log(average);

//var length = 7;
//var width = 3;
//var perimeter = length * 2 + width * 2;
//console.log(perimeter);





//expressions - expressions with arrays

//var orangeBins = [234, 567, 993];
//var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
//console.log(total);

//expressions - concatenating strings
//var firstName = "Mark";
//var lastName = "Green";
//var fullName = firstName + " " + lastName;
//console.log(fullName);

//var a = "6";
//var b = "7";
//var result = a + b;

//instead, remove quotations to get the result 13

//console.log(result);

//expressions - casting

//var stringVar = "6";
//var result = 7 + Number(stringVar);
//console.log(result);
//treating stringvar as a number

//var areaCode = 912;
//var prefix = 503;
//var endPart = 8757;
//var phoneNumber = String(areaCode) + String(prefix) + String(endPart);
//console.log(phoneNumber);

//Expressions - assignment operators

//var a = 3;
//original a + 4; = wrong, a was not assigned
//a = a + 4; //correct way or
//a += 4; this is also correct
// a *= 4; = a = a *4;
//a ++ ; = a = a + 1 or even a+=1 (shorter version)
//console.log(a);


//Expressions - prompt and alert

//var userInput = prompt("Enter your year of birth:");
//console.log(userInput);

var width = prompt("we are calculating the area of a rectangle, \n please enter width");
var height = prompt("Please enter height");
var area = width * height; //calculates with that info
//console.log(area); //prints it out to the console

var result = "The area of your rectangle is: " + area + "sq feet";
alert(result);










































