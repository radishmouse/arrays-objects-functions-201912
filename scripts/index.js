// Your code goes here!

function strMultiply(str, times) {
    // ???
    let result = "";

    // let count=times;
    // for(; count<0; count--) {
    //     result += str;
    // }

    // for(let count=0; count<times; count++) {
    //     result += str;
    // }
    let count = 0;
    while(count < times) {
        result += str;
        count++;
    }
    // while(times > 0) {
    //     // debugger;
    //     result += str;
    //     times = times - 1;
    // }

    return result;
}

// const multipliedStr = strMultiply('abc', 5);
// console.log(multipliedStr);

function range(min, max) {
    const arr = [];
    for (var i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
}

// function returnTheWord(jeff) {
//     return jeff;
// }

function strMultiplyWithRange(str, times) {
    let result = "";

    // rangeOfNumbers has length of `times`
    let rangeOfNumbers = range(0, times);
    // console.log(rangeOfNumbers.length);
    // This is a "closure".
    // It's a function that has access to variables
    // and arguments in the function around it.
    // When one function recieves a function as an argument
    // and calls it later. That argument is a callback
    // function.
    result = rangeOfNumbers.map(function () {
        // A function with no name is an "anonymous function"
        return str;
    });

    return result;
}

const multipliedStr = strMultiplyWithRange('cat', 5);
console.log(multipliedStr);

const products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];

function byPrice(a, b) {
    const priceOfItemA = a.price;
    const priceOfItemB = b.price;

    // debugger;

    if (priceOfItemA < priceOfItemB) {
      return -1;
    }
    if (priceOfItemA > priceOfItemB) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  products.sort(byPrice);