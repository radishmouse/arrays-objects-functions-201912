// Positive Numbers
// Write a function which takes an array of numbers as input and 
// returns a new array containing only the positive 
// numbers in the given array.

function posNumbers(numbers) {
    const positiveNums = [];
    for (let num of numbers) {
        if (num > 0) {
        positiveNums.push(num);
    }
}
    return positiveNums; 
}
console.log(posNumbers([7, 4, 2, 6, 4, 3, 2, -8]))


// Even Numbers
// Write a function which takes an array of numbers as input and returns a new 
// array containing only the even numbers in the given array.

function evenNumbers(numbers) {
    const evenNums = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNums.push(num);
        } 
    }
    return evenNums;
}
console.log(evenNumbers([6, -9, -2, 8, 3362]));

// Square the Numbers
// Write a function which takes an array of numbers as its argument and returns a new array 
// containing result of squaring each of the numbers in the given array by two. Example: 
// squareTheNumbers([1, 2, 3]) should give [1, 4, 9].


function squareTheNumbers(numbers) {
    const squares = [];
    for (let num of numbers) {
        square = num ** 2;
        squares.push(square)
    }
    return squares;
}
console.log(squareTheNumbers([1, 2, 3]));

// Cities 1
// Write a function which takes an array of city objects like such:

const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

function isCool(city) {
    return (city["temperature"] < 70)
}


// function isCool(city) {
//     let temperatureOfCity = city["temperature"];
//     if (temperatureOfCity < 70) {
//         return true;
//     } else {
//         return false;
// }
// }

const coolCities = cities.filter(isCool);

// Cities 2
// Write a function which takes an array of city objects like the above problem as 
// input and returns an array of the cities names.

function cityNames(city) {
    return (city["name"])
}

const namesCities = cities.map(cityNames);


// Good Job!
// Given an array of people's names:

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

  function goodJob(name) {
    return `Good job, ${name}!`;
  }
    const goodJobList = people.map(goodJob);


// 3 times
// Given a function, Use the call3Times function to print "Hello, world!" 3 times.



function call3Times(fun) {
    fun();
    fun();
    fun();
  }


function printsHelloWorld() {
    console.log(`Hello, World!`);
}  

call3Times(printsHelloWorld);
// const fun = `Hello, World!`;
// print(call3Times)

// n times
// You will write a function callNTimes that takes two arguments: times as a number, 
// and fun as a function. It will call that function for that many times. Example:
// You are allowed to use a loop in the implementation of callNTimes.

function callNTimes(times, fun) {
    for (let i = 0; i < times; i++) {
        fun()
    }
}

callNTimes(5, printsHelloWorld);

// Str Multiply
// Write a strMultiply function which takes two arguments:
// str - the string to multiply
// times - number of times to multiply
// Your function should return the multiplied string

function strMultiply(str, times) {
    let newArray = "";
    for (let i = 0; i < times; i++) {
        newArray += str;
    }
    return newArray
}
console.log(strMultiply('abc', 5));

// Bonus: Array sorting
// Sort an array
// Given an array of strings such as the array of names given 
// in one of the "Good Job" problem, sort them by alphabetically order.

people.sort();
console.log(people);

// Sort an array, 2
// Sort the same array, but not by alphabetically order, 
// but by how long each name is, shortest name first.

people.sort(function(a,b) {
    return a.length - b.length;
});

console.log(people);

// Sort an array, 3
// Given an array of array of products, sort by price:

const products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];

  products.sort(function(a, b) {return a.price - b.price})
    console.log(products);
