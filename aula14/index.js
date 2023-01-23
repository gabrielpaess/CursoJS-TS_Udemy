// IEEE 754-2008

let num1 = 0.7; //number
let num2 = 0.1;// number

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0


//ajuste para o número ser preciso
num1 = parseFloat(num1.toFixed(2));// o número passa a ser number.
//ou
num1 = Number(num1.toFixed(2));// o número passa a ser number.

console.log(num1);
console.log(Number.isInteger(num1));//quando chegar em números inteiros, a validação ficará true.

//OU

let num3 = 0.7; //number
let num4 = 0.1; //number

num3 = ((num3 * 100) + (num4 * 100)) / 100; //0.8
num3 = ((num3 * 100) + (num4 * 100)) / 100; //0.9
num3 = ((num3 * 100) + (num4 * 100)) / 100; //1.0

console.log(num3);
console.log(Number.isInteger(num3));//quando chegar em números inteiros, a validação ficará true.

//console.log(num1.toString() + num2);// faz a concatenação, não a soma dos valores.
// num1 = num1.toString(); // transforma o valor quando number, para string.
//console.log(num1.toString(2)); apresenta no log em binário
//console.log(num1.toFixed(2)); to fixed, arredonda um valor com vários digitos, no caso do dois ele mostra apenas dois digitos após a virgula.
//console.log(Number.isInteger(num1));
//let temp = num1 + '5';// não realizar contas com strings, nem sempre o mecanismo vai calcular corretamente.
//console.log(Number.isNaN(temp));//tratamento do retorno. true para erro false para retorno válido.
//console.log(temp);