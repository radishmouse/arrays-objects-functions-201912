// Your code goes here!



/* 1. Positive numbers
 Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
*/
let arr = [-1, -2, 1, 2, 3, 4]

let positive = arr.filter(val => {
    return val > 0;
})
//positive returns [1, 2, 3, 4]



/* 2. Even Numbers
Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
*/
let arr = [1, 2, 3, 4]

let even = arr.filter(val => {
    return val % 2 === 0;
});
//Even returns [2, 4]

/* 3. Square the Numbers
Write a function which takes an array of numbers as its argument and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].
*/

var arr = [5, 7, 4, 12];
let square = arr.map(x => x * x);
//Square returns [25, 49, 16, 144]

/* 4. Cities 1

Write a function which takes an array of city objects like such:

const cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
*/
const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

let coldCities = cities.filter(val => {
    return val.temperature < 70.0;
});

// Returns 
/*
[0:
Object{
name:
Los Angeles
temperature:
60
}
1:
Object{
name:
Atlanta
temperature:
52
}
2:
Object{
name:
Detroit
temperature:
48
}
]
*/



/* 5. Cities 2

Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.
*/

/*
let coldCitiesName = cities.filter(val => {
    return val.temperature < 70.0 ? val.name : 'not cold enough! ;
});
this returns the same as the previous one FUCK
*/

let namesOnly = coldCities.map(function(city) { return city["name"]; });


/* 6. Good Job!

Given an array of people's names:
const people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
Print out 'Good Job, {{name}}!' for each person's name, one on a line.
*/

const people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];
/*
people.forEach(function (greeting) {
    greeting.push(greeting)
}); */

people.forEach(person => {
    console.log(`Hello ${person}`);
})


/* 7. 3 times

Given this function:


const fun = () => { };

function call3Times(fun) {
  fun();
  console.log('hello)
  fun();
  fun();
}
.
*/
call3Times( () => console.log('Hello, world!') )




/* 8. n times

You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

> callNTimes(5, hello)
Hello, world!
Hello, world!
Hello, world!
Hello, world!
Hello, world!
You are allowed to use a loop in the implementation of callNTime
*/



function callNTimes(times, fun) {
    for (let i = 0; i < times; i++) {
      fun(i);
    }
  }

callNTimes(5, () => console.log('Hello, world!') ) 


/* 9. Str Multiply

Write a strMultiply function which takes two arguments:

str - the string to multiply
times - number of times to multiply
Example:

> strMultiply('abc', 5)
'abcabcabcabcabc'
You may not use the native repeat method that strings provide. But you can use the range function defined below.

You may use the following range function as is:

function range(min, max) {
  const arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}
*/
function strMultiply(string, times) {
    //Empty string to host repeated string
    let dreamingOfUsingEs6 = '';

    // Set the while loop conditions
    while (times > 0) {
    // I want it to run again as long as times is not 0 or negative yerrr
        dreamingOfUsingEs6 += string;  // dis do be the same as dreamingOfUsingEs6 = dreamingOfUsingEs6 + string
        times--; // times - 1
    // At this point we good
}
// Return 
    return dreamingOfUsingEs6;
}

strMultiply('david', 5);




/* ================ Bonus: Array sorting ================

For these exercises, you'll want to refer to the MDN docs on using Array's sort method.
*/
/* 1. Sort an array
Given an array of strings such as the array of names given in one of the "Good Job" problem, sort them by alphabetically order.
*/
const people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];
people.sort();


/* 2. Sort an array, 2
Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
*/
function peopleSort (array) {
    return array.sort((x,y) => x.length - y.length);
 }


/* 3. Sort an array, 3
const products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];
Sort the array by price.
*/

//FUCK this is not pretty
// Use compare to compare the price of each, then sort 

products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];

function compare(a, b) {
    const priceA = a.price;
    const priceB = b.price;

    let comparison = 0;
    if (priceA > priceB) {
        comparison = 1;
    } else if (priceA < priceB) {
        comparison = -1;
    }
    return comparison;
}