// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// variabili
const email_user = prompt("Inserire email");
console.log(email_user);

const email = [
	"stefano.necci@gmail.com",
	"marco.rossi@gmail.com",
	"valentino.proietti@gmail.com",
	"chiara.recubini@gmail.com",
	"luca.liguori@gmail.com",
];
console.log(email);

if (email_user === email) {
	document.getElementById("email").innerHTML =
		"Perfetto, l'email inserita è presente nella lista";
	console.log("Perfetto, l'email inserita è presente nella lista");
} else {
	document.getElementById("email").innerHTML =
		"Mi dispiace non è l'email prensente nella lista";
	console.log("Mi dispiace non è l'email prensente nella lista");
}
