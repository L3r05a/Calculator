//Operators functions
function addition (nA,nB){
    
    return nA + nB;
}

function subtraction (nA,nB){

    return nA - nB;
}

function multiplication (nA,nB){

    return nA * nB;
}

function division (nA,nB){

    return nA / nB;
}

//Variables for operation and display
let displayA='';
let displayB='';
let displayOp='';


//Takes operator and numbers and feeds into Operattors function

function operate (operator,numA,numB){

    addition(numA,numB);
    subtraction(numA,numB);
    multiplication(numA,numB);
    division(numA,numB);
}


//Selectors
const display = document.querySelector('.screen');
const numerals = document.querySelectorAll('.digit');


//Numbers buttons to display and first operand variable
numerals.forEach(button => {

    button.addEventListener('click', function(){

displayA += button.value;

display.value = displayA;

return displayA

    })
    
});






