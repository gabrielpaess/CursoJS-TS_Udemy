//TIPO DE VALOR
//objeto chave e colchetes array.
//Primitivos (imutáveis) - string, number, boolean, indefined, null, (bigint, symbol)

//          0123
let nome = 'Luiz';//a variável pode ter seu valor alterado, já o valor em si não.
nome[0] = 'R';
console.log(nome[0], nome);



//CÓPIA DE VALORES
let a = 'A';
let b = a;//cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);// primeiro foi copiada a variável de a para b, depois foi passado outro valor a variável a. Assim retornando valor diferente do inicio.



//Referência (mutável) - array, object, function - Passados por referência.
let c = [1, 2, 3];
let d = c;
console.log(c, d);//c e d apontam para o mesmo valor na memória.
c.push(4);
console.log(c, d);

d.pop();// c e d foram afetados pela alteração. ficando com apenas três valores.
console.log(c, d);

//OUTRO EXEMPLO 

const f = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const g = {...f};//aqui não esta mais referênciando o mesmo local na memória e sim salvando o valor de f em g.

f.nome = 'João';
console.log(f, g);//aqui ja conseguimos ver o retorno dos valores diferentes.