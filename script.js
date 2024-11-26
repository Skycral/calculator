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
let operator = false;
let result = false;
let firstNum;
let secondNum;
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
  

    } else if (operator === true){
      input.value = "";
      addBtn.style.opacity = 1;
      subBtn.style.opacity = 1;
      multiBtn.style.opacity = 1;
      divBtn.style.opacity = 1;
      operator = false;
    }
    switch (name) {
      case "n1":
        input.value += +1;
        break;
      case "n2":
        input.value += +2;
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
    if (operator === true) {
      alert("only one operator at a time");
    } else {
      
      let name = event.target.id;
      tempNum = +input.value;
  
      if (firstNum !== undefined && secondNum === undefined && result === false) {
        secondNum = +tempNum;
      } else if (result === false) {
        firstNum = +tempNum;
      } else {
        tempNum = undefined;
        result = false;
      }
  
      assNum();
  
      
      switch (name) {
        case "div":
          lastOps = '/';
          divBtn.style.opacity = 0.7;
          operator = true;
          break;
        case "add":
          lastOps = '+';
          addBtn.style.opacity = 0.7;
          operator = true;
          break;
        case "multi":
          lastOps = '*';
          multiBtn.style.opacity = 0.7;
          operator = true;
          break;   
        case "sub":
          lastOps = '-';
          subBtn.style.opacity = 0.7;  
          operator = true;
          break;
        case "equal":
          operator = false;
          result = true;
          lastOps = undefined;
          break;
        
      }

    }

  })
}


/* ----------------------------------------------------- */

//Calculations
/* ----------------------------------------------------- */

function assNum() {
  if (firstNum !== undefined && secondNum !== undefined) {
    firstNum = operate(+firstNum, +secondNum, lastOps).toFixed(3);
    input.value = +firstNum;
    secondNum = undefined;
  }
  tempNum = undefined;
}
