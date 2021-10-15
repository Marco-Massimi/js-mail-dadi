/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. 
*/

// variabili
const numUser = prompt("Inserire un numero compreso tra 1 a 6");
const numComputer = Math.floor(Math.random() * 7);

// console.log
console.log(numUser, numComputer);

// condizionale if
if (numUser > numComputer) {
	console.log("Hai vinto!");
	document.getElementById("result").innerHTML = "Hai vinto!";
} else if (numUser < numComputer) {
	console.log("Hai perso, mi dispiace");
	document.getElementById("result").innerHTML = "Hai perso, mi dispiace";
} else if (numUser == numComputer) {
	console.log("Punteggio pari");
	document.getElementById("result").innerHTML = "Punteggio pari";
}
