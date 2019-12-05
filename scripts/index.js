// Your code goes here!

// Function Exercises
    // The following exercises will ask you to create a function that solves a specific problem. (If you use loops, make sure they are part of the function.)






// 1. Positive Numbers
    // Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
//  ________________________________________________________________________________________________________________________________

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// CREATING ARRAY FOR FUNCTION^


function isPositive(number) {
    return number >= 0
};
// CREATING HELPER FUNCTION(Determines if number isPositive)^


const arrayOfPositives = arrayOfNumbers.filter(isPositive);
// CALLING FILTER METHOD^


console.log(`#1`)
console.log(arrayOfPositives);





// 2. Even Numbers
// -----------------
    // Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
//________________________________________________________________________________________________________________________________

// const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // (created in # 1 ^)


function isEven(number) {
    return number % 2 === 0 
}
// CREATING HELPER FUNCTION(Determines if number isEven)^


const arrayOfEvens = arrayOfNumbers.filter(isEven);
// CALLING FILTER METHOD^


console.log(`#2`)
console.log(arrayOfEvens);





// 3. Square the Numbers
// ---------------------
    // Write a function which takes an array of numbers as its argument and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].
//________________________________________________________________________________________________________________________________

// const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // (created in # 1 ^)


function squareTheNumbers(number) {
    return number * number;
};
// CALLING MAP & FILTER METHOD^

const arrayOfSquares = arrayOfNumbers.map(squareTheNumbers);
// CALLING MAP METHOD:^


console.log(`#3`)
console.log(arrayOfSquares);





// 4. Cities 1
// --------------

    // Write a function which takes an array of city objects like such:

        // const cities = [
        //   { name: 'Los Angeles', temperature: 60.0},
        //   { name: 'Atlanta', temperature: 52.0 },
        //   { name: 'Detroit', temperature: 48.0 },
        //   { name: 'New York', temperature: 80.0 }
        // ];
    
    // as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
//________________________________________________________________________________________________________________________________

const cities = [
          { name: 'Los Angeles', temperature: 60.0},
          { name: 'Atlanta', temperature: 52.0 },
          { name: 'Detroit', temperature: 48.0 },
          { name: 'New York', temperature: 80.0 }
        ];
// CREATING ARRAY FOR FUNCTION^

function removeCitiesHotterThan70(item) {
    return item.temperature <= 70
};
// CREATING HELPER FUNCTION(Filters list of only objects with temps<70)^


function getCitiesCoolerThan70(item) {
    if (item.temperature <= 70) {
        return item.name;
    } 
};
// CREATING HELPER FUNCTION(Creates list of only object NAMES with temps<70)^


const arrayOfCoolCities = cities
                    .filter(removeCitiesHotterThan70)
                    .map(getCitiesCoolerThan70);
// CALLING MAP & FILTER METHOD ^


console.log(`#4`)
console.log(arrayOfCoolCities);





// 5. Cities 2
// --------------
    // Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.
//________________________________________________________________________________________________________________________________

function getAllCities(item) {
  return item.name;
};
// CREATING HELPER FUNCTION(Determines if number isEven)^

const arrayOfAllCities = cities.map(getAllCities);
// CALLING MAP METHOD^

console.log(`#5`)
console.log(arrayOfAllCities);





// 6. Good Job!
// --------------
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
    // Print out 'Good Job, {{name}}!' for each person's name, one on a line.
//________________________________________________________________________________________________________________________________

function printGoodJob(name) {
    console.log(`Good Job, ${name}!`);
}
 
console.log(`#6`)
people.map(printGoodJob);





// 7. 3 times
// --------------
    // Given this function:

        function call3Times(fun) {
          fun();
          fun();
          fun();
        };
    // Use the call3Times function to print "Hello, world!" 3 times.
//  ________________________________________________________________________________________________________________________________

function fun() {
    return console.log(`Hello World!!`);
    
}

console.log(`#7`)
call3Times(fun);





//8. n times
// --------------
    // You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

    // > callNTimes(5, hello)
    // Hello, world!
    // Hello, world!
    // Hello, world!
    // Hello, world!
    // Hello, world!
    // You are allowed to use a loop in the implementation of callNTimes.
//________________________________________________________________________________________________________________________________

function hello(frequency) {
    while (frequency > 0) {
        console.log(`Hello World!`);
        frequency--;
    }
};
// CREATING HELPER FUNCTION (Is used in callNTimes)^

function callNTimes(frequency, fun) {
    fun(frequency);
};
// DEFINING FUNCTION^

console.log(`#8`)
callNTimes(5, hello);
 




// 9. Str Multiply
// -----------------
// Write a strMultiply function which takes two arguments:

    // str - the string to multiply
    // times - number of times to multiply
    // Example:

        // > strMultiply('abc', 5)
        // 'abcabcabcabcabc'
    // You may not use the native repeat method that strings provide. But you can use the range function defined below.

    // You may use the following range function as is:

        // function range(min, max) {
        //   const arr = [];
        //   for (var i = min; i < max; i++) {
        //     arr.push(i);
        //   }
        //   return arr;
        // }
//________________________________________________________________________________________________________________________________


function strMultiply(str, frequency) {
    let arr = ``
    while (frequency > 0) {
        arr += str;
        frequency--;
    }
    return arr
};

console.log(`#9`);
console.log(strMultiply(`abc`,5));



// Bonus: Array sorting
// ---------------------
// For these exercises, you'll want to refer to the MDN docs on using Array's sort method.
//________________________________________________________________________________________________________________________________



// 10. Sort an array
// -----------------
// Given an array of strings such as the array of names given in one of the "Good Job" problem, sort them by alphabetically order.
//________________________________________________________________________________________________________________________________

function sortArray1(arr) {
    return arr.sort();
}

console.log(`#10`);
console.log(sortArray1(people));



// 11. Sort an array, 2
// --------------------
// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
//________________________________________________________________________________________________________________________________

function byLength(a, b) {
    if (a.length < b.length){
        return -1;
    } 
    if (a.length > b.length){
        return 1;
    }
    return 0
};


console.log(`#11`);
console.log(people.sort(byLength)) ;
// console.log(people.map(sortArray2(people)));


// 12. Sort an array, 3
// --------------------
// Given an array of array of products:

const products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

// Sort the array by price.

//________________________________________________________________________________________________________________________________
function byPrice(a, b) {
    if (a.price < b.price){
        return -1;
    } 
    if (a.price > b.price){
        return 1;
    }
    return 0
};


console.log(`#12`);
console.log(products.sort(byPrice)) ;



// Reduce Example:
// --------------------
const mealPrice = [10, 15, 18, 10, 12];

function tax(total, price) {
  return total + (price * 1.1);
};

console.log(`#reduce example`)
console.log(mealPrice.reduce(tax));

