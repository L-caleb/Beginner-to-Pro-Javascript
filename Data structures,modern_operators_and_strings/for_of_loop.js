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

  rest1: {
    name:'capri',
    numGuests:20,
  },
   
   rest2: {
    name:'lapizza',
    owner:'grevin',
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

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

// with for of loop
for (const item of menu) {
  console.log(item);
}

//Example looping through a menu array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

//By default, for-of does NOT give you the index.
// using entries for both the array and index
for (const item of menu.entries()) {
  console.log(item);
}

// for getting
for (const [i,en] of menu.entries()) {
    console.log(`{$i+1}: {&el}`)
}

//🧠 Behind the Scenes: What is .entries()?
//.entries() returns an iterator of index-element pairs.

//To inspect it:

console.log([...menu.entries()]);


