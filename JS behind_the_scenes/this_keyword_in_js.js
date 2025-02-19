/*How the this keyword works

this keyword/variable: special variable that is created for every execution context (every function).

this is not static. it depends on how the function is called, and it's value is assigned when the function is actually called

Four ways in which function can be called

As a method: that is a function attached to an object (so in this scenario the this keyword would refer to the object calling the method 

Simple function call: calling function as normal functions and not as a method and so not attached to any object so in this case the this keyword will simply be undefined (only for struct mode) if you dont use strict mode the this keyword will point to the global object, which in case of the browser is the window object



Arrow functions: they do not get their own this keyword if we use the this keyword in an arrow function then it will be the this keyword in its parent function (surrounding function) and in technical terms this is called lexical this keyword cos it get picked from the outer lexical scope of the arrow function (THE GLOBAL SCOPE HAS A THIS KEYWORD SO THE ARROW FUNCTION ALWAYS POINT TO THE THIS KEYWORD IN TH GLOBAL SCOPE OR ITS PARENT SCOPE

event listener: if a function is declared as an event listener then the this keyword will always point to the dom element 


NOTE: THE THIS KEYWORD WILL NEVER POINT TO THE FUCTION IN WHICH WE ARE USING IT 
ALSO THE THIS KEYWORD WILL NEVER POINT TO THE VARIABLE ENVIRONMENT OF THE FUNCTION



so thats why we say the this keyword is not dynamic but static and depends on how the function is called

const f = jonas.calcAge

f()

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


in the above code calcAge is a method inside and object called jonas normally jonas.calcAge calls the method but now we put it inside a variable since a function is just a value and so we call the function now like a regular function and so the this keyword which we are to print from the method is now undefined since it is now a regular function 

summary

method this = <object that is calling the method>
simple function call this = undefined
arrow function this = <this of surrounding function(lexical this) >
event listener this = <dom element that handler is attached to>


*/