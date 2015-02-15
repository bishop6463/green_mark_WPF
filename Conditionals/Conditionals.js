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

//rational expressions

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

