console.log('Palindroma')



// Palidroma
//Chiedere all’utente di inserire una parola 
//Creare una funzione per capire 
//se la parola inserita è palindroma



// scrivo la parola palindroma

const parola =  prompt ('inserisci una parola');   
 
// scrivo la funzione per verifcare la parola 

let parolaInvertita = parola.split('').reverse().join(''); 
console.log (parolaInvertita);


// verifico se la parola è palindroma


if (parola === parolaInvertita) {
    console.log ('La parola è palindroma')
} else {
    console.log ('La parola non è palindroma')
}
