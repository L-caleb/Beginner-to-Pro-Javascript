'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

/*
third enhancement is that we can now compute property names

*/


  const openingHours =
  {
    [weekdays[3]]:
    {
       open: 12,
       close: 22
    },
    // thu

    [weekdays[4]]:
    { 
      open: 11,
      close: 23
    },
    // fri
    [`day-${2 + 4}`]:
    { 
      open: 0,
      close: 24
    } // dynamic key: 'day-6'
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //before ES6
  //openinghours = openinghours,

  //ES6 (so it put the object outside called opening hours inside this  restaurant object)
  openingHours,

  rest1: {
    name:'capri',
    numGuests:20,
  },
   
   rest2: {
    name:'lapizza',
    owner:'grevin',
  },

  
// another enhanced object literals is in the way we write methods

//beofore es6
  order:function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

//ES6
//order(starterIndex,mainIndex){
//  return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//}



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



