//valor por referencia
//
const nomes = ['Eduardo', 'Maria', 'Joana'];
const removido = nomes.shift();// SHIFT remove o primeiro elemento do array e POP remove o ultimo
//console.log(nomes, removido);
nomes.push('João');//adiciona mais um elemento
nomes.unshift('Wallace')//Adiciona no lugar do primeiro elemento, no caso da posição 0.
console.log(nomes);
const novo = nomes.slice(1, 3);
console.log(novo);

const nome = 'Luiz Otávio Miranda';
const nomeSeparado = nome.split(' ');// retorna um array utilizando SPLIT.
console.log(nomeSeparado);

const nomesArray = [ 'Luiz', 'Otávio', 'Miranda' ];
const nomeNormal = nomesArray.join(' ');// JOIN une os elementos do array, retornando apenas um elemento.
console.log(nomeNormal);