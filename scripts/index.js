////////////////////////////// function exercises //////////////////////////////

// write a function which takes an array of numbers as input and returns a new array
// containing only the positive numbers in the given array 

function positiveNumbers (numbers) {
    const array = [];
    for (let num of numbers) {
        if (num >= 0) {
            array.push(num);
            // console.log(array);
        }
    }
    return array;
}

console.log(positiveNumbers([1, 2, 3, 4, 99, -90, 100, 25468]));

// write a function which takes an array of numbers as input and return a new array
// containing only the even numbers in the given array 

function evenNumbers (numbers) {
    const array = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            array.push(num);
            // console.log(array);
        }
    }
    return array;
}

console.log(evenNumbers([1, 2, 3, 4, 99, -90, 100, 25468]));

// write function which takes an array of numbers as its argument and returns a new 
// array containing the result of squaring each of the numbers in the given array 
// by two 

function squareTheNumbers (numbers) {
    const array = []
    for (let num of numbers) {
        square = num** 2; {
            array.push(square);
        }

    }
    return array;
}

console.log(squareTheNumbers([1, 2, 3, 4, 99, -90, 100, 25468]));

// write a function which takes an array of city objects and returns a new array 
// containing the cities whose temperature is cooler than 70 degrees. 

const cities = [
    
    { 
    name: 'Los Angeles', 
    temperature: 60.0
    },
    { name: 'Atlanta', 
    temperature: 52.0 
    },
    { name: 'Detroit', 
    temperature: 48.0 
    },
    { name: 'New York', 
    temperature: 80.0 
    }
];



function isCool(city) {
    return (city["temperature"] < 70)
}
// function isCool(city) {
//     let temperatureOfCity = city["temperature"];
//     if(temperatureOfCity < 70) {
//         return true;
//     } else {
//         return false;
//     }
// }

const coolCities = cities.filter(isCool);


// write a function which takes an array of city objects and returns an array of the cities names 

function returnCityNames(city) {
    return (city["name"])
}

const cityNames = cities.map(returnCityNames);


// given an array of people's names, print out "good job, <name>!" for each person's name

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

function goodJob (name) {
    return `Good job, ${name}!`;
}

const goodJobList = people.map(goodJob);

// use the <call3Times> function to print "Hello, world!" 3 times 

function call3Times(fun) {
    fun();
    fun();
    fun();
}

function printsHelloWorld () {
    console.log(`Hello, World!`);
}

// call3Times(printsHelloWorld);


// write a function <callNTimes> that takes two arguments: <times> as a number 
// and <fun> as a function. it will call that function for that many times. 
// you are allowed to use a loop in the implementation of callNTimes 

function callNTimes (times, fun) {
    for(let i = 0; i< times; i++) {
        fun();
    }
}

callNTimes(5, printsHelloWorld);

// Str Multiply 

function strMultiply(str, times) {
    let newArray = ``;
    for (let i = 0; i <= times; i++) {
      newArray += str;
    }
    return newArray;
}

console.log(strMultiply(`abc`, 5));


////////////////////////////// *** BONUS*** //////////////////////////////

// sort an array 

people.sort();
console.log(people);

// sort an array 2 

people.sort(function(a,b) {
    return a.length - b.length;
});

console.log(people);

// sort an array 3 

const products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
];

products.sort(function (a,b) {return a.price - b.price});
console.log(products);


















