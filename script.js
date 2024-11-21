//Calculator begins
//First functions for basic math operators

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const divide = function (a, b) {
  return a / b;
};

const multiply = function (a, b) {
  return a * b;
};





// const power = function (a, b) {
//   return Math.pow(a, b);
// };

// const factorial = function (n) {
//   let product = 1;
//   for (let i = n; i > 0; i--) {
//     product *= i;
//   }
//   return product;
// };

let firstNum;
let secondNum;
let operator;

//Function choosing what kind of operator needed

const operate = function (op, a, b) {
  switch (op) {
    case '+':
      return add(a, b);

    case '-':
      return subtract(a, b);

    case '/':
      return divide(a, b);

    case '*':
      return multiply(a, b);
  } 

}

console.log(operate('*', 15, 4));