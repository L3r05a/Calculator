const display = document.querySelector("screen");

const plus = document.querySelector("add");

const minus = document.querySelector("sub");

const mult = document.querySelector("multi");

const divi = document.querySelector("divide");

const equ = document.querySelector("equal");

const reset = document.querySelector("clear");


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
let displayA,displayB,displayOp;

function operate (){

    addition();
    subtraction();
    multiplication;
    division();
}



