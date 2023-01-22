/*
* Operadores aritméticos
* + Adição / Concatenação
* - / *
* ** Potenciação
* % Resto da divisão
* 
* Precedência dos operadores
***************************** () -> ** -> * ou % -> + ou - ******************************8 
*/

const num1 = '5'; //considera caracter
const num2 = 10;//number
console.log(num1 + num2); //total 510

const num3 = 9;
const num4 = 5;
console.log(num3 % num4); // restou 4

//incrementando variável
//                                      incremento ++ ou decremento -- 
let contador = 1;
//incremento
contador++;//2
contador++;//3
contador++;//cada vez que é chamado adiciona 1, no caso aqui fica 4 no log ***
console.log(contador);//4

//decremento
contador--;//cada vez que é chamado diminui 1, no caso aqui fica 3 no log ***
console.log(contador);//3


// Operadores de atribuição
const passo = 50;
let contador2 = 0;

contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);

//Operadores de atribuição

let contador3 = 0;
contador3 += 2; // contador3 = contador3 + 50

//Operadores de atribuição

let contador4 = 2;
contador4 *= 10;
contador4 *= 10;
contador4 *= 10;
console.log(contador4);

let contador5 = 3;
contador5 **= 10;
console.log(contador5);

//Erro Nan - not a number
const num9 = 10;
const num10 = parseInt('5.2'); //parseInt **converte para um número inteiro**
const num11 = parseFloat('5.2'); //parseFloat **converte para um número com casas decimais**
const num12 = Number('5.2'); //Number **converte para um número com casas decimais ou inteiro**
console.log(num9 * num12);
console.log(typeof num12);
console.log(num12);
