// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Esce l'alert coi numeri da memorizzare; :memo:
// L'utente memorizza (o cerca di memorizzare) i numeri; :confounded:
// L'utente chiude l'alert; :open_mouth:
// L'utente per 30 secondi non vede nulla....e quindi cercherà immagino di ripetersi mentalmente i numeri :stuck_out_tongue:
// L'utente prova a inserire, uno alla volta, tutti e 5 i numeri :muscle:


// 1) Generazione numeri random e alert
var arrayNumeri = []

for (var i = 0; i < 5; i++) {
  var numeroRandom = Math.floor(Math.random() * 101);
  console.log(numeroRandom);
  arrayNumeri.push(numeroRandom);
}

alert(arrayNumeri);

// 2) Timer

var arrayUtente = [];

var clock = setInterval(myFunction, 3000);
function myFunction() {
for (var i = 0; i < 5; i++) {
  var numeriUtente = prompt('Inserisci i numeri che hai visualizzato..')
  console.log(numeriUtente);
  if (arrayNumeri.includes(numeriUtente)) {
    arrayUtente.push(numeriUtente);
  } else {
    console.log('Il numero che hai inserito non è presente');
  }
  clearInterval(clock)
}
}

console.log(arrayNumeri);
console.log(arrayUtente);
