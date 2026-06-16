function doTheOperation(firstNumber, secondNumber, operator) {
  const a = Number(firstNumber);
  const b = Number(secondNumber);

  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  };

  const result = operations[operator](a, b);

  updateDisplay(result);
  operator = "";
  firstNumber = result.toString();
  secondNumber = "";

}

function updateDisplay(value){
    const display = document.getElementsByClassName("calculator-display")[0];
    display.textContent = value;
}


let displayValue = ""
let firstNumber = "";
let secondNumber = "";
let operator = "";
function calculator(clickedButton){

    if(/^[0-9]$/.test(clickedButton)){
        if(operator === ""){
            firstNumber += clickedButton;
            updateDisplay(firstNumber)
        }else{ 
            secondNumber += clickedButton;
            updateDisplay(secondNumber)

        }
    }

    if(clickedButton === "+" ||
       clickedButton === "-" ||
       clickedButton === "/" ||
       clickedButton === "*"
    ){
        operator = clickedButton;
        if(secondNumber !== ""){
            doTheOperation(firstNumber, secondNumber ,operator);
        }
    }

    if(clickedButton === "=" && firstNumber !== "" && secondNumber !== ""){
        doTheOperation(firstNumber, secondNumber ,operator)
    }
    
}

createButtonsEventListenerButtons()

function createButtonsEventListenerButtons(){
        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
        button.addEventListener("click", () => {
            calculator(button.textContent)
       });
    });
}