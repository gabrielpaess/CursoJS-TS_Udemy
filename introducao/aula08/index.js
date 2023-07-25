/*
Luiz Otávio Mirando tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.9259259525925924
Gabriel nasceu em 1996
*/

const nome = 'Gabriel';
const sobrenome = 'Pinheiro';
const idade = 26;
const peso = 70;
const altura = 1.71; //altura em metros
let imc; 
imc = (peso / (altura * altura));
//peso / (altura * altura)
let anoNascimento = 1996;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);