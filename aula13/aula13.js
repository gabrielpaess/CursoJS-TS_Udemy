let umaString = "O rato roeu a roupa do rei de roma.";

//ou

let umaString2 = " \\Texto";

//ou

let umaString3 = "Um texto";

//ou

let umaString4 = " \"Texto\"";


console.log(umaString);// 

console.log(umaString3.charAt(3), umaString3[4]); //na variável que esta no console, eu tento pegar o que esta armazenado no indice.[]
//quando usado charAt(), tento localizar o caracter que esta armazenado na posição dentro do ().

console.log(umaString.concat(' em', ' um', ' arquivo'));// concatenação
console.log(umaString + ' em um arquivo');// concatenação
console.log(`${umaString} em um arquivo.`);// concatenação mais recomendada

//encontrar no indice a posição da palavra
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));// quando inserido o valor ,3. o mecanismo do js faz a pesquisa após a posição digitada, que no caso é 3. retornando o valor 7. Pois a letra 'o' se encontra na posição 7.
console.log(umaString.lastIndexOf('m', 3));// no caso do lastIndexOf ele começa a busca começando do maior para o menor. Neste caso do 7 ao 0. Retornando 1 no console.
console.log(umaString.match(/[a-z]/g));// Quando realizada a busca com .match(/[a-z]/g) o mecanismo do js retorna todas as letras minúsculas, quando realizada a busca com: (/[A-Z]/g) Retorna só as letras maiúsculas.
console.log(umaString.search(/[a-z]/g))//o search aceita expressões regulares para realizar buscas no indice da variável.
console.log(umaString.replace('Um', 'Outro'));//utilzando o replace, primeiro localizamos o que queremos substituir 'Um', depois é passado o novo valor 'Outro'.
console.log(umaString.replace(/r/, '*'));//utilzando o replace, primeiro localizamos o que queremos substituir 'Um', depois é passado o novo valor 'Outro'.Aqui utilizando expressões regulares.
console.log(umaString.replace(/r/g, '*'));//utilzando o replace, primeiro localizamos o que queremos substituir 'Um', depois é passado o novo valor 'Outro'.Aqui utilizando expressões regulares. (/r/g, '*'). QUANDO UTILIZADO O g MINÚSCULO, O MECANISMO SUBSTITUI TODOS OS CARACTERES.
console.log(umaString.length);//retorna o número de caracteres.
console.log(umaString.length - 3);//retorna o número de caracteres.
console.log(umaString.slice(-3));// o mecanismo do js subtrai o total de caracteres e mostra o restante apartir do valor mencionado dentro de slice(-3).
console.log(umaString.slice(32));//o mecanismo do js apresenta apenas o que esta armazenado após o valor digitado dentro de slice(32).
console.log(umaString.slice(-5, - 1));// o mecanismo do js subtrai o total de caracteres e mostra o restante apartir do valor mencionado dentro de slice(-5 e também tira o ultimo valor, quando adicionado length - 1).
console.log(umaString.split('r', 2));//o retorno não apresenta o caracter mencionado dentro do split('valor') e quando mencionado o valor 2 ou outro número após a virgula, será o número de vezes que o split será acionado pelo mecanismo do js.
console.log(umaString.toUpperCase());//todos os caracteres maiusculos
console.log(umaString.toLowerCase());//todos os caracteres minusculos