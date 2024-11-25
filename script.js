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


//Variables to hold input from user
let firstNum;
let secondNum;
let operator;
let tempNum;
let lastOps;

/* ----------------------------------------------------- */


//Connecting to DOM
/* ----------------------------------------------------- */
const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".op");

//Connecting input to display
for (const button of buttons) {
  button.addEventListener("click", (event) => {
    let name = event.target.id;
    console.log(input.value)
    if (input.value == "0") {
      input.value = "";
      
    } else if (operator !== undefined){
      input.value = '';
      console.log(firstNum);
      console.log(secondNum);
      addBtn.style.opacity = 1;
      subBtn.style.opacity = 1;
      multiBtn.style.opacity = 1;
      divBtn.style.opacity = 1;
      operator = undefined;
    }
    switch (name) {
      case "n1":
        input.value += +1;
        break;
      case "n2":
        input.value += +2
        break;
      case "n3":
        input.value += +3;
        break;   
      case "n4":
        input.value += +4;
        break;
      case "n5":
        input.value += +5;
        break;  
      case "n6":
        input.value += +6;
        break;
      case "n7":
        input.value += +7;
        break;     
      case "n8":
        input.value += +8;
        break;
      case "n9":
        input.value += +9;
        break;
      case "n0":
        input.value += +0;
        break;
      case "clear":
        firstNum = undefined;
        secondNum = undefined;
        tempNum = undefined;
        input.value = +0;
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


//variables for operators
const equalBtn = document.querySelector("#equal");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const multiBtn = document.querySelector("#multi");
const divBtn = document.querySelector("#div");



for (const op of ops) {
  op.addEventListener("click", (event) => {
    let name = event.target.id;
    console.log(input.value);
    tempNum = +input.value;

    if (firstNum !== undefined && secondNum === undefined) {
      secondNum = +tempNum;
    } else {
      firstNum = +tempNum;
    }
    
    switch (name) {
      case "div":
        operator = '/';
        lastOps = '/';
        divBtn.style.opacity = 0.7;
        assNum();
        break;
      case "add":
        operator = '+';
        lastOps = '+';
        addBtn.style.opacity = 0.7;
        assNum();
        break;
      case "multi":
        operator = '*';
        lastOps = '*';
        multiBtn.style.opacity = 0.7;
        assNum();
        break;   
      case "sub":
        operator = '-';
        lastOps = '-';
        subBtn.style.opacity = 0.7;  
        assNum();  
        break;

      case "equal":
        console.log(lastOps, firstNum, secondNum);
        firstNum = operate(firstNum, secondNum, lastOps);
        input.value = firstNum;
        secondNum = undefined;
        tempNum = undefined;
        
        break;
      default:
        break;
    }

    // assNum();
    

  })
}


/* ----------------------------------------------------- */

//Calculations
/* ----------------------------------------------------- */

function assNum() {
  if (firstNum !== undefined && secondNum !== undefined) {
    firstNum = operate(+firstNum, +secondNum, operator);
    input.value = +firstNum;
    secondNum = undefined;
  }
  tempNum = undefined;
}
