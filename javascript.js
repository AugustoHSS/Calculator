function createCalculator() {

    let firstNumber = "";
    let secondNumber = "";
    let operator = "";
    const display = document.getElementsByClassName("calculator-display")[0];
    const operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
    };

    function doTheOperation() {
    const a = Number(firstNumber);
    const b = Number(secondNumber);

    if (operator === "/" && b === 0) {
        resetCalculator();
        return;
    }
    const result = operations[operator](a, b);

    updateDisplay(result);

    firstNumber = result.toString();
    secondNumber = "";

    }

    function updateDisplay(value){
        const strValue = String(value);
        display.textContent = strValue;

    }

    function calculator(clickedButton){
        if(/^[0-9.]$/.test(clickedButton)){
            if(operator === ""){
                if (clickedButton === "." && firstNumber.includes(".")) {    
                    return
            }
                firstNumber += clickedButton;
                updateDisplay(firstNumber)
            }else{ 
                if (clickedButton === "." && secondNumber.includes(".")) {    
                    return
                }
                secondNumber += clickedButton;
                updateDisplay(secondNumber)

            }
        }

        if(clickedButton === "AC"){
            resetCalculator()
        }

        if(clickedButton === "C"){
            eraseLastDigit()
        }

        if(operations[clickedButton]){
            operator = clickedButton;
            if(secondNumber !== ""){
                doTheOperation();
            }
        }

        if(clickedButton === "=" && firstNumber !== "" && secondNumber !== ""){
            doTheOperation()
        }
        
    }

    function eraseLastDigit(){
        if(secondNumber !== ""){
            secondNumber = secondNumber.slice(0, -1);
            updateDisplay(secondNumber || "0")
        }
        if(secondNumber === "" &&
           firstNumber !== "" &&
            operator === ""){
            firstNumber = firstNumber.slice(0, -1);
            updateDisplay(firstNumber || "0")
        }
    }

    function resetCalculator(){
        firstNumber = "";
        secondNumber = "";
        operator = "";
        updateDisplay(0)
    }
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            calculator(button.textContent)
        });
    });
}
createCalculator();