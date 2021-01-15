// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Esce l'alert coi numeri da memorizzare; :memo:
// L'utente memorizza (o cerca di memorizzare) i numeri; :confounded:
// L'utente chiude l'alert; :open_mouth:
// L'utente per 30 secondi non vede nulla....e quindi cercherà immagino di ripetersi mentalmente i numeri :stuck_out_tongue:
// L'utente prova a inserire, uno alla volta, tutti e 5 i numeri :muscle:

var numeriCasuali = [];
var numeriUtente = [];

while(numeriCasuali.length < 5){
  var numero = generaRandom(1,100);
  if (!ricerca(numeriCasuali,numero)){
    numeriCasuali.push(numero);
  }
}

alert(numeriCasuali);

console.log(numeriCasuali);

setTimeout(inserimento,4000);

// Funzioni

function inserimento(){
  for(var i = 0; i < 5; i++){

    var n = parseInt(prompt('Inserisci un numero da 1 a 100..'));
    while(n < 1 || n > 100 || isNaN(n)){ //isNaN(n) dà vero quando non è un numero
      alert('Attento, il numero non è nell\'intervallo, riprova');
      var n = parseInt(prompt('Inserisci un numero da 1 a 100..'));
    }

    if(ricerca(numeriCasuali,n) && !ricerca(numeriUtente,n)){
      numeriUtente.push(n);
    }

  }
  console.log('Hai indovinato ' + numeriUtente.length + ' numeri : ' + numeriUtente );
}

function generaRandom(min,max){
  return Math.floor(Math.random()*(max - min + 1)) + min;
}

function ricerca(array,elemento){
  for(var i = 0; i < array.length; i++){
    if(elemento == array[i]){
      return true;
    }
  }
  return false;
}
