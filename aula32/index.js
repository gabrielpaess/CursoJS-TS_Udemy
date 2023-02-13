//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

//EXEMPLO

//               0  1  2  3  4  5  6  7  8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , três, , cinco, , sete] = numeros;
console.log(um, três, cinco, sete);

//[...resto]    console.log(resto); REST OPERATOR (RESTO DO ARRAY)

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO COM ARRAYS
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);

