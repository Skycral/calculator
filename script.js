//Calculator begins
/* ----------------------------------------------------- */
//basic math operators

const addition = (a, b) => {return a + b};
const subtract = (a, b) => {return a - b};
const divide = (a, b) => {return a / b};
const multiply = (a, b) => {return a * b};

//Function choosing what kind of operator needed
const operate = (a, b, op) => {
  switch (op) {
    case '+':
      return addition(a, b);
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
/* ----------------------------------------------------- */
const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".buttons div");

//Connecting input to display
const inputValue = () => {
  for (const button of buttons) {
    button.addEventListener("click", (event) => {
      let name = event.target.className;
      console.log(input.value)
      if (input.value === "0" || input.value === "+") {
        input.value = "";
      }
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
          firstNum = undefined;
          secondNum = undefined;
          tempNum = undefined;
          break;
        case "dot":
          if([...input.value].includes(".")){
            alert("This is not possible.")
            break;
          }
          input.value += ".";
        default:
          break;
      }
    })
  }
}

inputValue();

//variables for operators
const equalBtn = document.querySelector(".equal");
const addBtn = document.querySelector(".add");
const subBtn = document.querySelector(".sub");
const multiBtn = document.querySelector(".multi");
const divBtn = document.querySelector(".div");
let tempNum;

const addVar = addBtn.addEventListener("click", () => {
  tempNum = input.value;
  input.value = '+';
  operator = '+';

  assignNum();

  if (firstNum !== undefined && secondNum !== undefined) {
    console.log(+firstNum, +secondNum, operator);
    console.log(operate(+firstNum, +secondNum, operator));
    firstNum = operate(+firstNum, +secondNum, operator);
    input.value = firstNum;
    secondNum = undefined;
  }

  tempNum = undefined;
})



/* ----------------------------------------------------- */

//Calculations
/* ----------------------------------------------------- */



function assignNum() {

  if (firstNum !== undefined && secondNum === undefined) {
    secondNum = tempNum;
  } else {
    firstNum = tempNum;
  }
  console.log(tempNum);
  console.log(firstNum);
  console.log(secondNum);
}


