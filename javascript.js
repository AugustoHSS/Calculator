function createCalculator() {

    let displayValue = ""
    let firstNumber = "";
    let secondNumber = "";
    let operator = "";
    
    const operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
    };

    function doTheOperation() {
    const a = Number(firstNumber);
    const b = Number(secondNumber);

    const result = operations[operator](a, b);

    updateDisplay(result);

    firstNumber = result.toString();
    secondNumber = "";

    }

    function updateDisplay(value){
        const display = document.getElementsByClassName("calculator-display")[0];
        const strValue = String(value);
        if(strValue.includes(".")){
            display.textContent = Number(strValue).toFixed(3);
        }else{
            display.textContent = strValue;
        }
    }

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

        if(clickedButton === "AC"){
            resetCalculator()
        } 

        if(operations[clickedButton]){
            operator = clickedButton;
            if(secondNumber !== ""){
                doTheOperation(firstNumber, secondNumber ,operator);
            }
        }

        if(clickedButton === "=" && firstNumber !== "" && secondNumber !== ""){
            doTheOperation(firstNumber, secondNumber ,operator)
        }
        
    }

    function resetCalculator(){
        displayValue = "0"
        firstNumber = "";
        secondNumber = "";
        operator = "";
        updateDisplay(displayValue)
    }
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            calculator(button.textContent)
        });
    });
}
createCalculator();