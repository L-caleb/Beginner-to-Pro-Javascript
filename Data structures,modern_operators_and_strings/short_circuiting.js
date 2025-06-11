'use strict';


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },


  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//short circuiting (&& and ||)
/*

We have been using them to combine boolean values (logical operators)

* THEY CAN USE ANY DATA TYPE
* THEY CAN RETURN ANY DATA TYPE
* PERFORM SHORT CIRCUITING


*/

//OR SHORT CIRCUITING

/*

IF THE FIRST VALUE IS A TRUTHY VALUE IT WILL IMMEDIATELY RETURN THAT FIRST VALUE AND OTHER VALUE WILL NOT BE LOOKED AT. 
ELSE IT WILL CONTINUE LOOKING FOR A TRUTHY VALUE TO RETURN AND IF DOESNT SEE IT JUST RETURN LAST VALUE (TRUTHY OR FALSEY)

*/

console.log('' || 'jonas');
// jonas

console.log(true || 0);
// true

console.log(undefined || null);
// null

//null is falsy but it still return it since it did not see any truthy value and we have reached the end so it returne the last value

console.log(undefined || 0 || '' || 'HI' || 23 || null);
// hi

// without short circuiting

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// 10 cause it doesnt exist before so it sets guests1 to 10

//using destructuring

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
//now this way is more concise using destructuring both ways are same but this is more concise

// AND OPERATOR SHORT CIRCUITING

/*

IT WORKS EXACT OPPOSITE OF THE OR SHORT CIRCUITING IT SHORT CIRCUITS IMMEDIATELY IT SEES A FALSEY VALUE ELSE IT WILL GO AHEAD AND RETURN THE LAST VALUE (TRUTHY OR FALSEY)

*/
console.log('Hello' && 23 && null && 'jonas');
// null

//practical example

if (restaurant.orderpizza) {
    restaurant.orderPizza('mushrooms', 'spinach')
};

//using the and(&&) short circuiting

restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');
// so this is more concise it first check if the restaurant .orderpizaa exist before calling it 
/*meaning in short circuiting using and it checks if restaurant.orderpizza is truthy if it is it goes to next and look for falsey value and since it doesnt see it executes the last 
expression which is calling the restaurant.orderpizza
*/
