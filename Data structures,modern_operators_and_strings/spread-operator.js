'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

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

// spread operator

/*
so what the spread operator does is that it takes all the value out of the array
*/

const arr = [7,8,9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];

console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // this a whole new areay
console.log(newMenu);
/*
just like destructuring the spread operator takes element from the array
but it does not create new variables so we can only use it in places we would have values 
seperted by commas

*/

//two important use case of spread operator

//to create shallow copies of array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//iterables are arrays strings maps set but not objects

// Real - worls example
const ingredients = [
    prompt("Let's make pasta! Ingredient 1?"),
    prompt("Let's make pasta! Ingredient 2?"),
    prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
// we can also make shallow copy of objects just like we did for array up there
const newRestaurant = { foundedIn: 1998, ...restaurant, founder:'caleb' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

