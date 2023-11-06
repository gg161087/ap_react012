/* 
Tengo desarrollada la siguiente función en javascript
function suma (a,b,callback){
let c = a +b;
callback( );
}
¿Que es el tercer parámetro recibido?
Un callback, es una función que se pasa como argumento a otra función y se invoca dentro de esa función para completar algún 
tipo de acción o proceso.
¿En que casos es obligatorio desarrollar este tipo de funciones?
En situaciones en las que se espera que ciertas operaciones asincrónicas se completen antes de que se realicen otras operaciones.
Realizar un llamado a la función de ejemplo.
*/

//EJERCICIO 1
const myCallback = (resultado) => {
    console.log(`El resultado de la suma es: ${resultado}`); 
}

function suma (a,b,callback){
    let c = a +b;
    callback(c);
}

suma(1, 3, myCallback)

//EJERCICIO 2
const result = document.querySelector('#result');

const sum = () => {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    result.value = operand1 + operand2;
}
  
const subtract = () => {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    result.value = operand1 - operand2;
}
  
const multiply = () => {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    result.value = operand1 * operand2;
}
  
function divide() {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    result.value = operand1 / operand2;
}
