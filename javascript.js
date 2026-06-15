
function add(firstNumber, secondNumber){

    return firstNumber+secondNumber;
}

function subtract(firstNumber, secondNumber){

    return firstNumber-secondNumber;
}

function multiply(firstNumber, secondNumber){

    return firstNumber*secondNumber;
}

function divide(firstNumber, secondNumber){

    return firstNumber/secondNumber;
}


function calculator(){
    const operator = "+";
    const firstNumber = 3;
    const secondNumber = 6;

    if(operator === "+"){
        add(firstNumber,secondNumber)
    }else if(operator === "-"){
        subtract(firstNumber,secondNumber)
    }else if(operator === "/"){
        multiply(firstNumber,secondNumber)
    }else if(operator === "*"){
        divide(firstNumber,secondNumber)
    }
}