// Your code goes here!
const wholeNumbers = [-20, 10, 15, -1, 30, 0, 3, -3];
 
// positive numbers

function isPositve(array) {
    newArray = [];
   
    for(let numbers of array){
        if(numbers > 0 ){
            newArray.push(numbers);
        }

    }
    return newArray     
}

//console.log(isPositve(wholeNumbers))


 // filtering an array

 function isPositve(num) {
    if (num > 0){
        return true;
    
    }else{
        return false;
    }
     
 }

 const positiveNumber = wholeNumbers.filter(isPositve);

 //console.log(positiveNumber)


// even numbers

function isEven(array) {
    newArray = [];
   
    for(let numbers of array){
        if(numbers % 2 === 0 ){

            newArray.push(numbers);
        }

    }
    return newArray
    
}

// console.log(isEven(wholeNumbers))

function isEven(num) {
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

const evennumber = wholeNumbers.filter(isEven);


// console.log(evennumber)


// square the numbers

myArray = [1, 2, 3]

function squareNumber (num){
    return num ** 2
}

const newArray = myArray.map(squareNumber)

// console.log(newArray)


// cities 



const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

function isCooler(city){
    
    
    if (city.temperature < 70 ){

        return true;
    } else {
        return false;

    }
}
const cityTemp = cities.filter(isCooler)
console.log(cityTemp)

// cities 2

function cityName (cities) {
    return cities.name
}

const cityNames = cities.map(cityName)
console.log(cityNames)

// Good Job

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

function print_name (names){
    for ( let name of names ){
        console.log(`Good Job,${name} \n`)

    } 
  }

// print_name(people)

// 3 times

function call3Times(fun) {
    fun();
    fun();
    fun();
  }

function new_print(){

    console.log("Hello,world!")
}
// new_print();

call3Times(new_print);


// n times

function callNTimes(times, fun) {
    for( let i = 0; i < times; i++) {
        fun()
    }

}
callNTimes(5, new_print )


// Str Multiply


function strMultiply (str, times) {
    const newString = [];
    for(let i = 0; i < times; i++) {
        newString.push(str)   
    }
    console.log(newString.join("")) ;   
}
strMultiply('abc', 5);


// Bonus Array sorting
// sort an arry

// Good Job

const names = [
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

names.sort();
console.log(names);

//sort an array by length of names

names.sort(function(a, b){
    return a.length - b.length;
  });

console.log(names);


// sort an array by price

const products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];

 
products.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});
//console.log(products)
   








