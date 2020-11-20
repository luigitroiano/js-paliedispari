// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sceltaUtente = prompt("Scrivi 'pari' o 'dispari");
console.log(sceltaUtente);
var numeroUtente = Number(prompt("Scrivi un numero da 1 a 5"));
console.log(numeroUtente);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function pcRandomNumber(min, max) {
  return Math.floor((Math.random()*(max-min))+min)+1;
}
var numeroRandom = Number(pcRandomNumber(0, 5));
console.log(numeroRandom);

// Sommiamo i due numeri
var somma = numeroUtente + numeroRandom;
console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function evenOrOdd() {
  if ((somma % 2 === 0 && sceltaUtente === "pari") || (somma % 2 !== 0 && sceltaUtente === "dispari")) {
    console.log("Hai vinto");
  } else {
    console.log("Hai perso");
  }
  return risultato;
}

// Dichiariamo chi ha vinto.
var risultato = evenOrOdd();
