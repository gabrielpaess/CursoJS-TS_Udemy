/*
alert('Abriu o alerta');
window.alert('Abrindo alerta novamente');

window.confirm('Deseja apagar tudo?');// retorna false ou true. cancelando ou confirmando respectivamente

window.prompt('digite seu nome');// abre um campo para preenchimento. digitando confirmar retorna o texto digitado.

let confirma = confirm('Qualquer mensagem');

confirma
*/

let num1 = prompt('Digite um número');

let num2 = prompt('Digite um número');

num1 = Number(num1);
num2 = Number(num2);

console.log(num1 + num2);

const num3 = num1 + num2;

alert(`O resultado da soma dos dois números é:  ${num3}`); //template string ``

//ou pode ser verificado o resultado realizando a soma dos dois valores, mas o recomendado e criar uma variável e armazarenar o resultado nela.
alert(`O resultado da soma dos dois números é:  ${num1 + num2}`);
/*


*/
// ctrl + L LIMPA O CONSOLE DO CHROME

// DIGITANDO WINDOW DEPOIS ENTER
//mostra todos os objetos relacionados ao navegador

// ***exercicio de armazenar valores as variáveis***
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C';//A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

//ou pode ser feito

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

//