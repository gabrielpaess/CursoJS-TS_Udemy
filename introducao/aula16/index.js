//            0123456789
const nome = 'Luiz Otávio'
console.log(nome[0])// acessando o indice, retornando cada letra do nome.


//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];//teste para array
const number = 123;//teste para number

console.log(typeof alunos);//verifica se é um objeto
console.log(alunos instanceof Array);//verifica se é um array

//alunos.push('Luiza');//adiciona no fim
//alunos.push('Gabriel');//adiciona no fim
//console.log(alunos.slice(0, 2));//quando não existe valor no indice indicado, retorna undefined.
//(alunos.slice(0, 2)) quando declarado dois valores, no caso(0, 2), os elementos que serão apresentados são do inicio (0) e apresentados apenas dois elementos (2), pois foi declarado isso no slice.
//(alunos.slice(0, -2)) quando declarado dois valores, no caso(0, -2), os elementos que serão apresentados são do inicio (0) e subtraidos dois elementos (-2), pois foi declarado isso no slice.


//delete alunos[1];//deixa no indice 1 o valor undefined.
//console.log(alunos);//acessando todos os nomes


//const removido = alunos.shift();//remove o primeiro elemento do array.
//const removido = alunos.pop();//remove o ultimo elemento do array.
//console.log(removido);


//no caso do unshift, a inclusão se da por ordem, de cima para baixo. A Luiza entra com a posição 0, depois entra Fábio assumindo esta posição. Pois ele é declarado posteriormente a Luiza. E o mecanismo realiza a leitura de cima para baixo.
//alunos.unshift('Luiza');//primeiro que assume a posição 0
//alunos.unshift('Fábio');//segundo que assume posição 0. Luiza passa a ser posição 1.



//alunos[alunos.length] = 'Gabriel';adiciona no fim
//alunos[alunos.length] = 'Fábio';adiciona no fim
//alunos[alunos.length] = 'Luiza';adiciona no fim

//alterando valor para o primeiro nome.
//alunos[0] = 'Eduardo';

//adicionando um novo elemento no array
//alunos[3] = 'Luiza';

//console.log(alunos[0]);// acessando o primeiro nome
//console.log(alunos[2]);//acessando o terceiro nome