// Your code goes here!

let testArray = [-1, -5, -15, 2, 5, 9, 15];

// Positive Numbers 

function returnPositives(array) {
    let newArray = [];
    for (let num of array) {
        if (num >= 0) {
            newArray.push(num);
        }
    }
    return newArray;
}

// console.log(returnPositives(testArray));

// Even Numbers 

function returnEvens(array) {
    let newArray = [];
    for (let num of array) {
        if (num % 2 === 0) {
            newArray.push(num);
        }
    }
    return newArray;
}

// console.log(returnEvens(testArray));

// Square the Numbers

function returnSquares(array) {
    let newArray = [];
    for (let num of array) {
        newArray.push(num ** 2);
    }
    return newArray;
}

// console.log(returnSquares(testArray));

// Cities 1

const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

function coolerThanSeventy(array) {
    let newArray = [];
    for (let city of array) {
        // console.log(city["temperature"]);
        if (city.temperature < 70) {
            newArray.push(city.name);
        }
    }
    return newArray;
}

// console.log(coolerThanSeventy(cities));

// Cities 2

function returnsCityNames(array) {
    let newArray = [];
    for (let city of array) {
        // console.log(city["temperature"]);
    newArray.push(city.name);
    }
    return newArray;
}

// console.log(returnsCityNames(cities));

// GOOD JOB! Exercise

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

function printGoodJob(array) {
    for (let name of array) {
        console.log(`Good Job, ${name}!`);
    }
}

// printGoodJob(people);

// 3 Times

function fun() {
    console.log("Hello, world!");
}

function call3Times(fun) {
    fun();
    fun();
    fun();
  }

// call3Times(fun);

// n Times

function callNTimes(times, fun) {
    for (let i = 0; i < times; i++) {
        fun();
    }
}

// callNTimes(5, fun);

// Str Multiply

function strMultiply(str, times) {
    let newStr = "";
    for (let i = 0; i < times; i++) {
        newStr += str;
    }
    return newStr;
}

// console.log(strMultiply('abc', 5));

// SORT AN ARRAY EXERCISE

// Sorted by alphabetical order:
// console.log(people.sort());

// SORT BY STRING LENGTH

function compareStrLength(a, b) {
    if (a.length < b.length) {
        return -1;
    }
    if (a.length > b.length) {
        return 1;
    }
    return 0;
}

// console.log(people.sort(compareStrLength));

// SORT BY PRICE

const products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];

function comparePrice(a, b) {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0;
}

// console.log(products.sort(comparePrice));