
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.



// chiedere il numero km e età
var numeroKm = parseInt(prompt('inserisci i Km'));
console.log(numeroKm);
var etaPasseggero = parseInt(prompt('inserisci la tua età'));
console.log(etaPasseggero);

// Calcolare Costo biglietto
var prezzoBiglietto = numeroKm * 0.21;
var scontoMinori =  (prezzoBiglietto * 20) / 100;
var scontoAnziani = (prezzoBiglietto * 40) / 100;
var prezzoDefinitivoMinori = prezzoBiglietto - scontoMinori;
var prezzoDefinitivoAnziani = prezzoBiglietto - scontoAnziani;
if (isNaN(numeroKm) || isNaN(etaPasseggero)) {
  alert ('non hai inserito un numero');
  } else {
    if (etaPasseggero < 18) {
      console.log(prezzoDefinitivoMinori);
  } else if (etaPasseggero >= 65){
      console.log(prezzoDefinitivoAnziani);
  } else
    console.log(prezzoBiglietto);
  }
}
