//tipos de dados primitivos
//string, number, undefined, null, boolean, symbol

const nome = 'Gabriel'; //string
const nome1 = "Gabriel"; //string
const nome2 = `Gabriel`; //string
const num1 = 10; //number
const num2 = 10.52 //number
let nomeAluno; //undefined = não aponta pra local nenhum na memória
let sobreNomeAluno = null; // nulo -> não aponta pra local nenhum na memória
const boolean = false; // boolean é true or false (lógico)

let a = 2;
const b = a;

console.log(a, b); //2, 2

a = 3;   //valor de a alterado
console.log(a, b); //3, 2