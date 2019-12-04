// Your code goes here!
/// #1. positive numbers

const numbers = [
    1, 
    2, 
    -1, 
    -2
]

// checks if num is positive
function isPositive(num) {
    return num < 0;
}
// filter based on positivity
function onlyPositives(array) {
    return array.filter(isPositive);
}

// console.log(onlyPositives(numbers))

/// #2. Even numbers

// checks if num is even
function isEven(num) {
    return num % 2 == 0;
}

// filter to get evens
function onlyEven(array) {
    return array.filter(isEven);
}

/// #3. Square the numbers

function squareNumsInArray(array) {
    return array.map(function(x) {
        return x * x;
    })
}
// console.log(squareNumsInArray(numbers))

/// #4. cities 1

const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

// Check the temperature
function tempUnder70(cityObj) {
    return cityObj.temperature < 70;
}
// Do that to each object's "temperature" value
function citiesByTemp(arr) {
    return arr.filter(tempUnder70);
}
// console.log()
// console.log(citiesByTemp(cities));

/// #5. cities 2

// get the city names from the object
function namesGet(obj) {
    return obj.name;
}
// do that to all items in the array of objects
function cityNames(array) {
    return array.map(namesGet);
}
// console.log(cityNames(cities));

/// #6. Good Job

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

function goodJobEveryone(array) {
    array.map(function(name) {
        console.log(`Good Job, ${name}!`)
    })
}
// console.log(goodJobEveryone(people))

/// #7. 3 times

// define fun
function sayHello() {
    console.log('Hello, World!')
}

function call3Times(fun) {
    fun();
    fun();
    fun();
}
// console.log(call3Times(sayHello));

/// #8. n Times

// 
function callNTimes(times, fun) {
    let calls = 0;
    while (calls < times) {
        fun();
        calls ++;
    }
}
// console.log(callNTimes(3, sayHello))

/// #9. Str Multiply

function strMultiply(str, times) {
    let final = ''; 
    let count = 0;
    while (times > count) {
        final += str;
        count ++;
    }
    return final;
}
// console.log(strMultiply('abc', 2))

/// #10. Sort an array
