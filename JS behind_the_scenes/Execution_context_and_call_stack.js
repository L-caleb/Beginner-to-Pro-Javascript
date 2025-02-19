/*
Execution contexts and the call stack

THE call stack is a place where execution context gets stacked on top of each other to keep track of where we are in the execution so the execution context on top if the stack is the one currently running and when it is done running it will be removed from the stack and execution will go back to the previous execution context

so at first a global execution will be created for the top level code and that will be the one in the call stack and be in the top of the stack until it calls a function then another global execution context will be created and it will now be the one at the top of the call stack



So once the top level code is executed functions then start to execute as well( so for each function call a new execution context is created  containing all the information necessary to run that function , all these execution context make up the call stack

so when functions are done executing the engine will kepp waiting for callback function to arrive so it can execute

WHAT IS INSIDE THE EXECUTION CONTEXT

Variable Environment

let, const var declarations

functions

argument objects

Scope chain

this keyword


HOW IS JAVASCRIPT CODE EXECUTED

we know it hapens in the call stack in the engine

so lets say the code is already compiled and ready to be executed a so called global execution context is created for the top-level code that is code that is not inside a function so so at the beginning, only code outside of a function will be executed (variables ....) and this make sense cos functions should only be executed when they are called



EXECUTION CONTEXT

It is an environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed. So JavaScript code always runs inside an execution context

In any javascript project no matter how large it is there is only ever one global execution context it is always there as the default context and it is where top level code will execute
*/