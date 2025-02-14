/*
Scope and the Scope chain 

Each execution content has:

variable environment
scope chain
this Keyword


scoping : how our programs variables are organized and accessed. where do variables live? or where can we acess a certain variable, and where not?

lexial scoping : scoping is controlled by placement of functions and blocks in the code i.e the way variables are organized and accessed is entirely controlled by the placement of functions and of blocks in the program code

For example, a function that is written inside

another function has access to the variables

of the parent function, okay?

So again, variable scoping is influenced

by where exactly we write our functions and code blocks.

scope: Scope is the space or environment

in which a certain variable is declared,

simple as that.

And in the case of functions,

that's essentially the variable environment

which is stored in the functions execution context.

So if now you're asking yourself,

what's the difference between scope

and variable environment?

Then the answer is that for the case of functions,

it's basically the same. 


So the scope of a variable is basically the entire region

of our code, where a certain variable can be accessed.


And remember, scope is the place in our code

where variables are declared.

And when I say variables, the exact same thing

is true for functions as well.

Because in the end, functions are just values

that are stored in variables.


global scope:  the global scope is once more

for top level code.

So this is for variables that are declared

outside of any function or block.

These variables will be accessible everywhere

in our program, in all functions and all blocks.

So really, everywhere.


local scope/function scope:  Next, each and every function creates a scope.

And the variables declared inside that function scope

are only accessible inside that function.

This is also called a local scope

opposed to the global scope. function declaration expression and arrow function all create their own scope


blocks
traditionally only function used to create scope in javascript but now in es6 blocks also created scope now (anything in between curly braclets) e.g block of an if statement for loop just like with functions variables declared inside a block can only be accessed inside the block buut this only applies to variables declared with let or const so thats why we say lets and const variables are blocked scope so if you use var it can be accessed outsid the block and would be scoped to the current function or global scope and so var is function scoped 

also now in es6 all functions are now blocked scope at least in strict mode(which you should be using any way) this means function declared inside a block are only accessible inside the block


note:
every scope

always has access to all the variables

from all its outer scopes.

So from all its parent scopes.

so each scope can access variables from it's immediate parent and not above so an inner inner scope as no acess to the global scope direct but because it parent has access to the global scope then it can acess it from its parent scope


Now it's important to note that these variables

are not copied from one scope to another, okay?

Instead, scopes simply look up in the scope chain

until they find a variable that they need

and then they use it.

What's also extremely important to note

is that this does not work the other way around.

variables in the global scope are accessible from anywhere cos they are in the top chain


lets say we have two scope (a block scope and a function inside another function scope ) now those two scope can not have access to each other variables cos they are siblings in a scope this as a result of lexical scoping(so because one is not written inside the other. We can also say that the scope chain works upwards not sideways




scope chain vs call stack


Now, as we already know,

the scope chain is all about the order

in which functions are written in the code.

But what's really important to note here

is that the scope chain has nothing to do with the order

in which functions were called.

Or in other words, the scope chain has nothing to do

with the order of the execution contexts in the call stack.

The scope chain does get the variable environments

from the execution context as shown by the red arrows here,

but that's it.

The order of function calls is not relevant

to the scope chain at all, all right?

Really keep that in mind.

since 
So we can say that the scope chain in a certain scope

is equal to adding together all the variable environments

of all the parent scopes.




const a = 'jonas'
first();

function first() {
	const b = 'hello!';
	second();

	function second() {
		const c = 'hi';
		third();
	}
}

function third() {
	const d ='hey!';
	console.log(d + c + b + a);
	// reference error
}

explanation for the third function if it can acess those variables in it

Great, so what happens in this third function?

Well, we're trying to act as variables B, C,

D and A here.

D is no problem because it's right there

in the third function scope.

So that one is easy.

Then variable C is not in a local scope

and so JavaScript needs to do a variable lookup.

So it looks up in a scope chain

looking for variable C,

but it's not there.

And of course it isn't,

because C is defined in the second function,

and there is just no way in which the third function

can access variables defined in the second function.

And that is true,

even though it was the second function who called the third.

And so here is even more proof

that the order in which functions are called

does not affect the scope chain at all.

And so here as a result,

we get the reference error

because both C and B cannot be found

in the third scope nor in the scope chain.


The key distinction here is calling a function vs. accessing its variables. Just because third() can call first(), it does not mean it has access to first()'s variables. This happens due to JavaScript’s lexical scoping.


Why Can third() Call first() but Not Access Its Variables?
1. Function Definitions vs. Function Execution
first() is a global function, so any other function (including third()) can call it.
However, variables declared inside a function are scoped to that function.
2. Function Scope Rules
Global Scope: Accessible everywhere.
Function Scope: Variables are only accessible inside the function they are declared in.

scoping asks the question "where do variables live" or "where can we acess a certain variable, and where not?", 

there are 3 types of scope in javascript: the gobal scope, scopes defined by functions, and scopes defined by bocks 

only let and const variables are blocked scoped. variables declared with var end up in the closet function scope
in javascript we have lexical scoping so the rules of whr\ere wecan acess variables are based exactly where n the code fiunction and blocks are written 

everyscope always has acess to all the variables from all its outer scopes this is the scope chain!

when a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable its looking for. this is called variable lookup;

the scope chain is a one way street; a scope will never, ever have access to the variables of an inner scope;

the scope chain in a certain scope is equal to adding together all the variables environments of the all parent scopes;

the scope chain has nothing to do with the order in which functions were called. it does not affect the scope chain at all

*/