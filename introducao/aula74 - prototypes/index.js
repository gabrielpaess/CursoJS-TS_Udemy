/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para criá-0lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// ONDE O MOTOR DO JS BUSCA AS INFORMAÇÕES -> (PESSOA1 -> _PROTO_ -> OBJ.PROTOTYPE)

function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A. ');// <- Pessoa = fnc construtora
const data = new Date(); // <- date = fnc construtora

console.dir(pessoa1);
console.dir(data);