//Calculator begins

/* ----------------------------------------------------- */
//First functions for basic math operators

const add = (a, b) => {return a + b};
const subtract = (a, b) => {return a - b};
const divide = (a, b) => {return a / b};
const multiply = (a, b) => {return a * b};

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

console.log(operate('/', 15, 4));

//Variables to hold input from user
let firstNum;
let secondNum;
let operator;

/* ----------------------------------------------------- */


//Connecting to DOM

//break up into different functions? One for for loop, one for switch statement?

/* ----------------------------------------------------- */
const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".buttons div");



function inputValue() {
  

  for (const button of buttons) {
    button.addEventListener("click", (event) => {
      let name = event.target.className;
      
      switch (name) {
        case "n1":
          input.value += 1;
          break;
        case "n2":
          input.value += 2
          break;
        case "n3":
          input.value += 3;
          break;   
        case "n4":
          input.value += 4;
          break;
        case "n5":
          input.value += 5;
          break;  
        case "n6":
          input.value += 6;
          break;
        case "n7":
          input.value += 7;
          break;     
        case "n8":
          input.value += 8;
          break;
        case "n9":
          input.value += 9;
          break;
        case "n0":
          input.value += 0;
          break;
        case "clear":
          input.value = 0;
          break;
        case "dot":
          input.value += ".";
        default:
          break;
      }
    })
  }
  

  
}

inputValue();


/* ----------------------------------------------------- */