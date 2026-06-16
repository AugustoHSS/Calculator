function createCalculator() {

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
        console.log(secondNumber)
        if(secondNumber !== ""){
            secondNumber = secondNumber.slice(0, -1);
            updateDisplay(secondNumber)
        }
        if(secondNumber === "" &&
           firstNumber !== "" &&
            operator === ""){
            firstNumber = firstNumber.slice(0, -1);
            updateDisplay(firstNumber)
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