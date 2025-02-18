//SPREAD OPERATOR

//We can use the spread operator to basically expand ana rray into all it's elements, so basically unpacking all the array elements at one 

//example usage

const badArray = [1,2,arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArray = [1,2, ...arr];
console.log(newArray);

console.log(...newArr);
console.log(1,2,7,8,9);

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

//so what the spread operator does is that it takes all the value out of the array and then write them individually. by commas.

//the spread operator is a bit similar to destructuring, because it helps us get elements out of arrays. Now the big difference is that the spread operator takes all the elements from the array and it also does not create new variables and the consequence for this is that we can use the spread operator whenever we would otherwise write multiple values separated by commas.

//so that's the first situation in which it's very useful to expand an array and the second situation is when we pass argument into functions

//we can use the spread operator to create shallow copies of array and to merge two arrays together

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

//spread operator(...) dont just work on arrays but all iterables

//iterables are things like arrays,strings,maps or set except object, most of the js data structures now are iterables except object 
 

//strings

const str = 'jonas';
const letters = [...str, '', 'S'];
console.log(letters)

//NOTE: WE CAN ONLY USE THE SPREAD OPERATOR WHEN BUILDING ARRAYS OR WHEN WE PASS VALUES INTO A FUNCTION (SO WE USE IT IN A PLACE THAT ACCEPTS MULTIPLE VALUES SEPERATED BY COMMAS)

//some more use cases

console.log(...str);
//console.log(`${...str} caleb`); wrong

//function that accepts multiple arguments and then use the spread operator to actually pass those arguments

//first add a new method to the object we have being using

// the below should be inside that our object (restauarant)
orderPasta: function(ing1, ing2, ing3) {
    console.log({`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`,})
};




const ingredients = [
	prompt("let's make pasta! ingredient 1?"),
	prompt("let's make pasta! ingredient 2?"),
	prompt("let's make pasta! ingredient 3?"),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);// hard way
restaurant.orderPasta(...ingredients);//faster way using spread operator

//now in ES6 the spread operator works on object even tho objects are not iterables 

//spread operator in objects

const newRestauant = { foundedIn: 1998, ...restauarant, founder: 'guiseppe' };
 
//shallow copy of objects

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ritorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);








	



