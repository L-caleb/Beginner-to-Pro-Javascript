/*
THE MEMORY LIFECYCLE IN JAVASCRIPT

MEMORY MANAGEMENT

Memory management is how the JavaScript engine allocates space in memory for creating variables and later frees up that memory space, which was taken up by variables that are no longer needed 

unlike c that we have to do this manually JavaScript handles this for us automatically  

But how does this all work

Well, to give you a broad overview, every single value that we create in our applications goes through something that we call a memory lifecycle.

So in this lifecycle, first, a piece of memory is allocated

whenever we create a new value.
For example, to assign that value to a new variable in our code. So essentially, each time we declare a variable with a new value, no matter if it's a single value or a huge object, the JavaScript engine will automatically reserve a piece of memory to store that value. So the value that is being held by the variable that we just created.

first of all we 

allocate memory:

let temp = 23.7 // whenever we assign a value to a new variable, the engine automatically allocated (reserves) a piece of memory to store the value 


Use memory :
temp = temp + 5 round(temp)
while code is running, the value is written, read, and updated in the allocated piece of memory 

release memory:
temp is removed from memory

when no longer needed, the value is deleted from memory to free up resources. the released memory is used for a new values




ALLOCATE MEMORY IN DETAILS

In JavaScript for different kind of values memory are allocated in different places in the JavaScript engine but what are those different type of values 

Primitive value or an object

primitive data types are numbers, strings, Booleans, undefined, null symbols, and Big ints then everything else is object(that includes object created with the object literals


THE JAVASCRIPT ENGINES

THE CALL STACK AND THE HEAP

CALL STACK: Where functions are executed, stores primitives in details primitive values are gonna be stored in the execution context in which they are created.

There might be some exceptions to the above rules (js might store a very long string which is primitive in the heap so that the call stack where strings are usually placed can be optimized

HEAP: Where objects are stored in memory, heap stores objects

Refernce to objects: the heap just doenst store the object but a reference to the object in the heap the variable name of the object is stored in the execution content of the call stack and it stores the reference of that object (the memory of the object is what will be stored in the value of location, so variables in the call stack do not hold object themselves but a reference pointing to those objects

Now since varibles stores the reference to the object when we now copy that object into a new variable then that new variable also will be pointing to the same object in the heap and this is different from how primitive work, where each variable actually holds it's own copy of the primitive value because they are no reference involved at all and this will make any changes in either of the variable affect the other since they both point to the same reference

function calcAge(birthyear) {
	const now = 2037;
	const x = now - birthyear;
	return x;
}

now the above function (function in general) behind the scenes also just an object so is also stored in the heap and so the calcAge variable will simply hold a reference to this object as well.




*/