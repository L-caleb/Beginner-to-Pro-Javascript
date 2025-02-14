/*
variable environment: Hoisting and the TDZ

An execution content always contain 3 parts:

variable environment 
scope chain in the current context
the this keyword


variable environment

Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "variables lifted to the top of their scope".

behind the scenes 
before the execution, code is scanned for variables declarations, and for each variable, a new property is created in the variable environment object

so we will talk about hoisting in :

function declarations

var variables

let and const variables

function expressions and arrows




we can not use function expression before we write them i a code unlike function declaration 


hoisting in function declaration:

function declaration is hoisted i.e it is accessible for use before it is defined and its initial value is the actual function and function are blocked scope i.e function in a block can not be accessed outside the block


hositing in var variables 

var variables is hoisted but the initial variables is set to undefined and var are function scoped i.e they can not be accessed outside the function


hoisting in let and const variables

let and const are not hoisted(technically yes, but not in practice)  initial value (they are uninitialized) TDZ and let and const are blocked scope   Temporal Dead Zone (TDZ) in JavaScript
The Temporal Dead Zone (TDZ) is the time between when a variable is hoisted and when it is initialized. If you try to access the variable before initialization, you'll get a Reference Error.


function in function expressions and arrows 
depends if you are using var or let/const so if it is declared with var  function expression or arrow function is hoisted to undefined.But if created with let or const, it's not usable before it's declared in a code because of the Temporal Dead Zone so again, just like normal variables, right?

TEMPORAL DEAD ZONE, LET AND CONST

const myName = Jonas;

if (myName === 'Jonas') {
	console.log(`Jonas is a ${job}`);
	const age = 2037 - 1989;
	console.log(age);
	const job = 'teacher';
	console.log(x);
}

looking at the job variable it is a const so it's scoped only to this if block and it's gonna be accessible starting from the line where it is defined, and this is cos of the temporal dead zone for the job variable. it is basically the region of the scope in which the variable is defined, but cant be used in any way so it is as if the variable does not exist now Now, if we still tried to access the variable while in the TDZ like we actually do in the first line of this if block, then we get a reference error telling us that we can't access job before initialization. So exactly as we learned in the last slide, right? However, if we tried to access a variable that was actually never even created, like in the last line here where we want to log x, then we get a different error message saying that x is not defined at all. What this means is that job is in fact in the Temporal Dead Zone where it is still initialized, but the engine knows that it will eventually be initialized because it already read the code before and set the job variable in the variable environment to uninitialized. Then when the execution reaches the line where the variable is declared, it is removed from the Temporal Dead Zone and it's then safe to use. 
/*






