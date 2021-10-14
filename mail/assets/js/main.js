// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// variabili
const emailUser = prompt("Inserire email");

// array
const email = [
	"stefano.necci@gmail.com",
	"marco.rossi@gmail.com",
	"valentino.proietti@gmail.com",
	"chiara.recubini@gmail.com",
	"luca.liguori@gmail.com",
];

// ciclo for
for (let i = 0; i < email.length; i++) {
	if (emailUser == "stefano.necci@gmail.com") {
		document.getElementById("mail").innerHTML = "Perfetto, la sua e-mail è presente nella lista"
	} else if (emailUser == "marco.rossi@gmail.com") {
		document.getElementById("mail").innerHTML = "Perfetto, la sua e-mail è presente nella lista"	
	} else if (emailUser == "valentino.proietti@gmail.com") {
		document.getElementById("mail").innerHTML = "Perfetto, la sua e-mail è presente nella lista"	
	} else if (emailUser == "chiara.recubini@gmail.com") {
		document.getElementById("mail").innerHTML = "Perfetto, la sua e-mail è presente nella lista"	
	} else if (emailUser == "luca.liguori@gmail.com") {
		document.getElementById("mail").innerHTML = "Perfetto, la sua e-mail è presente nella lista"
	} else (emailUser != email){
		document.getElementById("mail").innerHTML = "Mi dispiace, la sua e-mail non è presente nella lista"
	}


