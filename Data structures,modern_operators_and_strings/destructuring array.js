//DESTRUCTUTRING array

//destructuring is a way of unpacking values from an array or an object into separate variables, so destucturing is to break a complex data structure into a smaller data structure like a variable, so for arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way

const arr = [2,3,4];
const a =  arr[0];
const b =  arr[1];
const c =  arr[2];


const [x,y,z] = arr;
console.log(x,y,z);

//when javascript sees [] on the left side it knows it should do destructuring


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}


let [mai , secondary] = restaurant.categories;
console.log(mai, secondary);

//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main]

//the above is switching variables normal way and using destucturing


//receive2 return values from a function and destructure them into an array


order: function(starterindex, mainindex) {
	return [this.starterMenu[starterindex], tis.mainmenu[mainindex]];
}

const [starter, main] = restaurant.order(2,0);
console.log(starter, main)

//nested array with destructuring

const nested = [2,4,[5,6]];
// const [i, , j] = nested;
console.log(i,j,k);

//default values in array with destructuring

const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r);


