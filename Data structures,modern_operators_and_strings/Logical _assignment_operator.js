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

//Logical assignment operators OR and AND

// lets do something we have done before
restaurant.rest1.numGuests = restaurant.rest1.numGuests || 10; // 0
restaurant.rest2.numGuests = restaurant.rest2.numGuests || 10; // 10

// OR ASSIGNMENT OPERATOR
// SO WITH THIS OPERATOR WE CAN WRITE SAME THING ABOVE BUT IN A MORE CONCISE WAY 

rest1.numGuests ||=10;
rest2.numGuests ||=10;

// THE OR ASSIGNMENT OPERATOR ASSIGNS A VALUE TO A VARIABLE IF THAT VARIABLE IS CURRENTLY FALSY JUST LIKE THE ABOVE EXAMPLE WE ARE CHECKING IF RESTAURANT.REST1.NUNGUESTS EXISTS
// IF IT DOES NOTWE ASSIGN 10E ELSE NOTHING HAPPENS OR IT ASSIGNS THE VALUE THERE BEFORE

//NOW FOR WHEN || TREATS ZERO AS A FALSEY AGAIN WE DO

restaurant.rest1.numGuests ??=10;
restaurant.rest2.numGuests ??=10;

//AND ASSIGNMENT OPERATOR
//SO THE LOGOCAL AND ASSIGN A VALUE TO A VARIABLE IF THE VARIABLE IS CURRENTLY TRITHY THAT IS IT CONTAINS AN ACTULA VLAUE

//Using the normal way
rest1.owner = rest2.owner && '<anonymous>';

//Using the logical and operator
rest2.owner &&= '<anonymous>';

