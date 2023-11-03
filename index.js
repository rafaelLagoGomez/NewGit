
//Reto2-Clase5

function sum (number1, number2, number3) {
    return number1 + number2 +  number3;
}

function sums (number1, number2) {
    return number1 - number2;
}

function mult (number1, number2) {
    return number1 * number2;
}

function div (number1, number2) {
    return number1 / number2;
}

function cuadr (number1) {
    return number1**2;
}

module.exports = {
    sum, 
    sums, 
    mult, 
    div,
    cuadr
}

