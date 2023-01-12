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