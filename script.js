// flag for displayed result

let resultDisplayed = false;

//Selectors
const display = document.querySelector('.screen');
const numerals = document.querySelectorAll('.digit');
const operations = document.querySelectorAll('.op');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const backspace = document.querySelector('.delete');


//functional variables
let currentInput = '';
let firstOperand = null;
let operator = null;
let decimalCount = 0;

//AC buttons logic
clearButton.addEventListener('click', function(){

    display.value = '';
    currentInput = '';
    firstOperand = null;
    operator = null;
    
})


//KEYBOARD support

document.addEventListener('keydown', function(event){

const key = event.key;

//match key pressed to existing numerals buttons values

if(!isNaN(key) || key === '.'){

    const button = [...numerals].find(btn => btn.value === key);

    if (button) button.click();
}

//matches operator keys
if (['+', '-', '*','/',].includes(key)){

    let mappedOperator = key;

    const button = [...operations].find(btn => btn.value ===mappedOperator);

    if(button) button.click();
}
//equals button
if(key === 'Enter' || key === '='){
    equalsButton.click();
}
//clear button
if (key.toLocaleLowerCase()=== 'c' || key === 'Escape'){
    clearButton.click();
}
//backspace button
if (key === 'Backspace'){
    backspace.click();
}

});



//BACKSPACE button logic

backspace.addEventListener('click', function () {

if (currentInput !== '') {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;

}

})
   

//monitors NUMBER buttons and returns value

    numerals.forEach(button => {

    button.addEventListener('click', function() {

//  if result is displayed on number click then resets flag

if(button.value === '.'){
            decimalCount ++;
        }

        if (button.value === '.' && decimalCount > 1){
            return;
        }

        if (resultDisplayed) {
            
        currentInput = '';
        display.value = '';
        resultDisplayed = false;

        }

    currentInput += button.value;

    display.value = currentInput;

    });
    
});

//monitors OPERATOR buttons, returns value 

operations.forEach(button => {

    button.addEventListener('click', function(){

//chained operation new operator
        const newOperator = button.value;

//if there is a full operation, runs it
if (firstOperand !==null && operator !==null &&currentInput !==''){

    const secondOperand = Number(currentInput);

    const result = operate(firstOperand, secondOperand, operator);

    //divide by zero safeguard in chained operation logic
    if (isNaN(result)){
        display.value = 'can\'t do that man';
        currentInput = '';
        firstOperand = null;
        oper = null;
        resultDisplayed = true;
        return;
    }

    display.value = parseFloat(result.toFixed(2));

    //use result as first operand, await 2nd operand
    firstOperand = result;
    decimalCount = 0;
    currentInput = '';
    operator = newOperator;
    resultDisplayed = true;

} else if (currentInput !==''){

    firstOperand = Number(currentInput);

    operator = newOperator;
    decimalCount = 0;
    currentInput = ''; //clears for 2nd operand
}
});
});

//monitors equal button

equalsButton.addEventListener('click', function(){

    if (currentInput === '' || firstOperand === null || operator === null) return;

const secondOperand = Number(currentInput);

const result = operate (firstOperand, secondOperand, operator);

console.log(result, typeof result)


//divide by zero message and logic

if(isNaN(result)){

    display.value = 'can\'t do that man';

    currentInput = ''; 

} else {

//rounds down to 2 decimals 

display.value = parseFloat(result.toFixed(2));

currentInput = result.toString(); //stores current value to use in next calc

}


firstOperand = null;
decimalCount = 0;
operator = null;

resultDisplayed = true; //flags that a result has been displayed
//so next number pressed clear the screen

})

function operate (a,b,op){

    
    switch(op) {

    case '+':

    return addition(a,b);

    case '-':

    return subtraction(a,b);
        
    case  '*':

    return multiplication(a,b);

    case '/':

    if (b === 0) return NaN;
    
    return division(a,b);

    default: 
    
    return NaN;

    }
}

// //Operators functions

function addition (a,b){
    
    return a + b;
    
}

function subtraction (a,b){

    return a - b;
}

function multiplication (a,b){

    return a * b;
}

function division (a,b){

    return a / b;
}

