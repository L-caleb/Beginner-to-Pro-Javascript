/*
JAVASCRIPT ENGINE AND RUNTIME

JAVASCRIPT ENGINE : PROGRAM THAT EXECUTES JS CODE 

So any JavaScript engine always contains

a call stack and a heap.

The call stack is where our code is actually executed

using something called execution contexts.

Then the heap is an unstructured memory pool

which stores all the objects that our application needs.

Now JavaScript used to be a purely interpreted language

but the problem with interpreted languages

is that they are much, much slower than compiled languages.

This used to be okay for JavaScript,

but now with modern JavaScript

and fully fledged web applications that we built

and use today, low performance is no longer acceptable.


So instead of simple interpretation

modern JavaScript engine now use a mix between

compilation and interpretation

which is called just-in-time compilation.

This approach basically compiles the entire code

into machine code at once and then executes it right away.

So we still have the two steps

of regular ahead of time compilation

but there is no portable file to execute.

And the execution happens immediately after a compilation.

And this is perfect for JavaScript

as it's really a lot faster than just executing code

line by line.


Anyway, let's now understand how this works

in the particular case of JavaScript.

So as a piece of JavaScript code enters the engine

the first step is to parse the code

which essentially means to read the code.

During the parsing process, the code is parsed

into a data structure called

the abstract syntax tree or AST.

This works by first splitting up each line of code

into pieces that are meaningful to the language

like the const or function keywords,

and then saving all these pieces

into the tree in a structured way.

This step also checks if there are any syntax errors

and the resulting tree will later be used

to generate the machine code.



Anyway, the next step is compilation

which takes the generated AST

and compiles it into machine code

just as we learned in the previous slide.

This machine code then gets executed right away

because remember modern JavaScript engine use

just-in-time compilation.

And remember execution happens

in the JavaScript engines call stack

but we will dig deeper into this in the next lecture.

All right, so far so good.

We have our code running so we can finish here, Right?

Well, not so fast because modern JavaScript engines

actually have some pretty clever optimization strategies.

What they do is to create a very unoptimized version

of machine code in the beginning

just so that it can start executing as fast as possible.

Then in the background, this code is being optimized

and recompiled during the already running program execution.

And this can be done most of the times

and after each optimization

the unoptimized code is simply swept

for the new more optimized code

without ever stopping execution of course.

And this process is what makes modern engines

such as the V-Eight so fast

and all this parsing, compilation and optimization

happens in some special threads inside the engine

that we cannot access from our code.

So completely separate from the main thread

that is basically running into call stack

executing our own code.

JAVASCRIPT RUNTIME

The lecture discusses JavaScript runtimes, particularly in the browser, to give a complete picture of how JavaScript operates. A JavaScript runtime is described as a "container" that includes everything needed to execute JavaScript. The JavaScript engine is at the core of any runtime, making it essential for JavaScript to function. However, the engine alone is insufficient—web APIs (like the DOM, timers, and console.log) are also required. These APIs are not part of JavaScript itself but are provided by the browser and accessed via the global window object.

Additionally, a callback queue is part of the runtime. It holds callback functions (such as event handlers) that are waiting to be executed. When an event occurs (e.g., a button click), its corresponding callback function is placed into the callback queue. The event loop then moves these functions from the queue to the call stack when it's empty, ensuring JavaScript’s nonblocking behavior. This is fundamental to JavaScript's concurrency model.

The lecture also mentions that JavaScript can run outside browsers, such as in Node.js, where the runtime differs. Since there's no browser, there are no web APIs. Instead, Node.js uses C++ bindings and a thread pool for handling asynchronous operations. While the details of these components aren’t the focus, it’s essential to know that multiple JavaScript runtimes exist.

Finally, the lecture concludes by stating that the next topic will cover JavaScript execution in the call stack, which is another critical concept in understanding how JavaScript works.


note wriiten in udemy note

Call stack is where our code is executed(execution context) and heap is where objects are stored(objects in memory).The call stack is also a place where executio contexts get stacked on top of each other, to keep track of where we are in  the execution

PARSING

The first step in the compilation phase is known as parsing and in this stage, it means reading the code the code is passed into AST, and it saves the meaningful code into a tree that is also set for errors, and the resulting tree will be used for the compilation



COMPILATION

then the generated ast is converted into machine code



EXECUTION (Happens in the call stack)

and it is executed immediately cos modern js uses just in time compilation

OP
In the beginning, a non-optimized code is created so it can start executing as fast as possible then in the background the code is being optimized and recompiled during the already running program execution and this can be done multiple times and for  each optimized code the old one is swapped with the new one without stopping execution
this what makes modern js so fast
  
Javascript runtime in the browser : container including all the things that we need to use javascript (in this case in the browser ) the heart of any js runtime is actualy the engine (heap and call stack) the engine is not enough to work properly it works with api (dom timers fetch api etc) web api are functionlaities provided to the engine, accessible on window object but are not part of the javascript language itself

a typical javascript runtime contains a callback queue it is a data structure that contains all the call back functions that are ready to be executed event handler functions are also called callback function


*/