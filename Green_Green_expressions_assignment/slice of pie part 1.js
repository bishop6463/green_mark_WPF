//slice of pie part 1

//number of pizzas
//number of people
//number of pizzas ordered

var pizzaSlices = 11; //sets up variable 1
var partyPeople = 27;//sets up variable 2
var pizzasOrdered = 5;//sets up variable 3

var numberOfSlicesEaten = pizzasOrdered * pizzaSlices/partyPeople;// * is multiplication / is division
console.log(numberOfSlicesEaten); //prints it out to the console
var result = "Each" + " " + "person" + " " + "ate" + " " + numberOfSlicesEaten + " " + "slices" + " " + "of" + " " + "pizza" + " " + "at" + " " + "the" + " " + "party";
alert(result);//displays a pop up of the answer


//slice of pie part 2

var remainder = 55 % 27; //modulo operator
console.log(remainder);//prints it out to the console
var result = "sparkie" + " " + "got" + " " + remainder + " " + "slices"  + " " + "of" + " " + "pizza";
alert(result);//displays a pop up of the answer
