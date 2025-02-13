/*
HOISTING AND TDZ IN PRACTICE

 //FUNCTIONS

console.log(addDec(2,3));
console.log(addExpr(2,3));
console.log(addArrow(2,3));

function addDecl(a,b);{
	return a+b;
}

var addExpr = function (a,b){
	return a + b;
}

var addArrow = (a,b) => a + b;


when we try to call the arrow and expression function it shows error instead of undefined but the reason is cos the function itself is initialized to undefined so we are now basically doing this undefined(2,3)


//Example
console.log(undefined):
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
	console.log('All products deleted!');
}

now there is a flaw in this code cos we wanted the function "deleteShoppingCart();" to only be deleted when the numProducts is = 0 that is when it is a falsy value but cos of hoisting numproduct declared with var is first initialized to undefined at first and so undefined is also a falsy value and so the if block still runs  even tho the numProduct is 10 


JAVASCRIPT BEST PRACTICES TO PREVENT SOMETHING LIKE THE ABPVE

DONT USE VAR USE CONT AND LET 
DECLARE YOUR VARIABLES AT THE TOP OF EACH SCOPE
ALWAYS DECLARE ALL YOUR FUNCTIONS FIRST AND USE THEM ONLY AFTER DECLARATION

YOU COULD USE FUNCTION DECLARATION BEFORE YOU DECLARE THEM BUT JUST DONT DO THAT IT IS NOT CLEAN

*/