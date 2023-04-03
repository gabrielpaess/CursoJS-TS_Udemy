//               -5       -4        -3         -2        -1
//               0         1        2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//unshift
nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log(nomes);

//push adiciona ao final do array
//nomes.splice(nomes.length, 0, 'Luiz', 'Otávio', 'Miranda');
//console.log(nomes);

//nomes.splice(indice, delete, elem1, elem2, elem3);
//pop
//const removidos = nomes.splice(-2, Number.MAX_VALUE);//max value neste caso esta pegando o numero maximo de elementos que existem.
//console.log(nomes, removidos);