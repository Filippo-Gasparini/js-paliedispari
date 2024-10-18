console.log ('pari e dispari')





//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer 
//(usando una funzione). Sommiamo i due numeri Stabiliamo se la 
//somma dei due numeri è pari o 
//dispari (usando una funzione) Dichiariamo chi ha vinto.





// chiedo all'utente di scegliere pari o dispari e di scrivere un numero un numero da 1 a 5

const paridispari = prompt ('scegli pari o dispari')
const numberUser = prompt ('inserisci un numero da 1 a 5')

// genero un numero random per il computer

const numberPc = Math.floor(Math.random()*5)+1;
console.log (numberPc)