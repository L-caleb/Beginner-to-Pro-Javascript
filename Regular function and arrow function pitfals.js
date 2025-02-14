/*
PITFALLS RELATED TO THE REGULAR AND ARROW FUNCTIONS

An object block is not a scope block, it is just an object literal, that is where we define object so an arrow function inside an object the this keyword wont be from the object cos thats not a block instead the this keyword of the arrow function will be from the global scope

// EXAMPLE

Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
  }	

  greet: () => {
  console.log(this);
  console.log(`Hey ${this.firstName}`);
  },
};



 the arrow function here, which does not have its own this keyword, will use the this keyword from the global scope. And remember that is the window object. Right? And so this dot first name is also undefined.so an arrow function inside an object the this keyword wont be from the object cos that's not a block instead the this keyword of the arrow function will be from the global scope (example above) 


The above behavior can be really dangerous if we used var to declare variables just like in the same code which we put in var variable (just for testing sha) var firstName = 'matilda'

now var firstName goes into the window object cos thats the default way of var and so in the window object firstName is now defined which is not what we want 

SO THAT IS ANOTHER REASON NOT TO USE VAR


Jonas.greet


BEST PRACTICE 

NEVER USE AN ARROW FUNCTION HAS A METHOD

ANOTHER PITFALL IS A FUNCTION INSIDE A METHOD

IF THAT FUNCTION INSIDE A METHOD IS CALLED IT IS ACTUALLY CALLED AS A NORMAL FUNCTION SINCE IT IS ACTUALLY A NORMAL FUNCTION AND SO IT DOESNT INHERIT ANY THIS KEYWORD OF THE PARENT FUNCTION(METHOD) INSTEAD THE THIS KEYWORD IS UNDEFINED JUST LIKE THE WAY THS KEYWORD IS UNDEFINED IN NORMAL FUNCTION 

EXAMPLE FOR ABOVE

const Jonas = {
	firstName: 'jonas',
	calcAge: function () {
            //console.log(this)
	    console.log(2037 - this.year);

	    const isMillenial = function () {
	        console.log(this);
		console.log(this.year >= 1981 && this.year <=1996);
	    };
	    isMillenial();
	}

	greet; ()=. {
	    console.log(this);
	    console.log(`Hey ${this.firstName}`);
	},
};
Jonas.greet();
Jonas.calcAge();

now you can see it in code now the function we declared in the calcage method has no acesss to the this keyword even tho it is a child element of the calcage function and this cos the this keyword is based on the object calling a function (method) and since the function in that method is called like a normal function the this keyword in that function will be undefined even tho calcage has a this keyword from Jonas object which is the function parent element so this keyword is based on the object calling it 
            



Solution to the problem above(using this with the arrow function)

 we can set the this keyword in the function(method) that an object is gonna call 

self = this

and now inside the function that an object wont call we can now use self inside instead of this 

ES6 Solution for above

we use an arrow function instead of another function cos an arrow function does not get it's own this keyword it inherits its parent's own 



example for the above explanation

Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },


ARGUMENT KEYWORDS

Function also get access to an argument keyword not only this keyword but only for regular functions

You can add more than the argument you specified as parameters even witout giving them a name so by printing the arguments keyword you will see all the arguments you inputed and you could use them for something maybe add them all up together  but the arrow function does not have it's own argument keyword 

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);// it doesn't work



*/


