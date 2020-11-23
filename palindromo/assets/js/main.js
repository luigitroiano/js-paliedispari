function isPalindrome(parola) {
  var parolaReverse = "";
  for (var i = parola.length - 1; i >= 0; i--) {
    parolaReverse += parola[i];
  }
  if (parolaReverse == parola) {
    console.log("È palindroma");
  } else {
    console.log("Non è palindroma");
  }
}

var parolaUtente = prompt("Inserisci una parola o frase");
isPalindrome(parolaUtente);
