//------------------------------------------------------------------------------------ task1
// step 1

var x = 10;
x = 20;
var x = 15;
console.log(x); // netice 15 verecek

// step 2

if (true) {
  let y = "intiqam";
}
console.log(y); // undifined qaytaracaq cunki let blok scobe icindedir

//step 3

const intiqam_age = 20;

intiqam_age = 21; // error verecek sebeb ise , const deyismez deyer saxlayir

//------------------------------------------------------------------------------------ task2
//step 1

// function multiply(a, b) {
// return a * b;
// }

const multiply = (a, b) => {
  return a * b;
};

//step 2

const square = (x) => x * x;

//step 3

const addUser = (name, age) => ({ name, age });

//------------------------------------------------------------------------------------ task3
//step 1

function greet(name = "Stranger") {
  console.log(`Hello ${name}`);
}

greet("Intiqam");

//step2

function defaultParametr(name, greeting = "Hello") {
  return console.log(`${name} ${greeting}`);
}

defaultParametr("intiqam");

//------------------------------------------------------------------------------------ task4
//step1
function sum(...numbers) {
  numbers.reduce((acc, curr) => acc + curr);
}
//step2
function sum(...numbers) {
  if (numbers.every((num) => typeof num === "number")) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  } else {
    return NaN;
  }
}
//----------------------------------------------------------------------------------- task5

//step1
const range = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    let current = this.start;
    return {
      next: () => ({
        value: current,
        done: current++ > this.end,
      }),
    };
  },
};

//step2
for (let value of range) {
  console.log(value);
}
