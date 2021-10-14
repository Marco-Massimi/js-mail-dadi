/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. 
*/

const numUser = prompt("Inserire un numero compreso tra 1 a 6");
const numbers = Math.floor(Math.random() * 7);
console.log(numbers);
