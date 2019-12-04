// Your code goes here!

const numArray = [12,-456,-234,56,3,75,-23,5,47,234,-56,-234,87,5,-978,-132,467,231,-586,-23,586]
const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
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

  const products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];

//positive numbers.
function positiveNumbers(anArray){
    return anArray.filter(x => x > 0);
}
console.log("all the positive numbers in an array")
console.log(positiveNumbers(numArray));

//even numbers.
function evenNumbers(anArray){
    return anArray.filter(x => (x%2) == 0);
}
console.log("all the even numbers in an array")
console.log(evenNumbers(numArray));

//Square the numbers  in an array

function squareNumbers(numArray){
    return numArray.map(x => x*x);
}
console.log("all the numbers in an array, squared")
console.log(squareNumbers(numArray));

//return all the cities colder than 70 degrees
function coolCity(cities){
    return(cities.filter(city => (city.temperature < 70)).map(x => x.name));
}
console.log("cities colder than 70 degrees")
console.log(coolCity(cities));

//return all the cities in an array of objects
function allCity(cities){
    return(cities.map(x => x.name));
}
console.log("all the cities");
console.log(allCity(cities));

// tell everybody what kind of a job they are doing.
function goodJob(nameArray){
    return nameArray.map(name => console.log(`Good job, ${name}!!`))
}
console.log("GOOD JOB EVERYBODY!!!!!!");
goodJob(people);    

//messing with "call3Times"!
function call3Times(fun) {
    fun();
    fun();
    fun();
  }

call3Times(x => console.log("HELLO WORLD!!!!")); 

function callNTimes(n, fun){
    for(let i=0; i < n;i++){
        fun();
    }
}

callNTimes(5, x => console.log("Hello WORLD!!!"));

//string multiplier thingy.

// function strMultiply(str, times){
//     let newStr="";
//     for (let i =0; i < times; i++){
//         newStr+=str;
//     }
//     return newStr;
// }


function range(min, max) {
    const arr = [];
    for (var i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
  }

function strMultiply(str, times){
    return range(0, times).reduce((x => x + str),"");
}

console.log(strMultiply('abc', 0));


//SORTING STUFF!!!1!!

//basic sort
function sort(anArray){
    return anArray.sort();
}
console.log(sort(people));

//sort by length of string
function sortLength(strArray){
    return strArray.sort((a,b) => a.length - b.length);
}
console.log(sortLength(people));

// sort by price value
function priceSort(objArray){
    return objArray.sort((a,b) => a.price - b.price)
}
console.log(priceSort(products));