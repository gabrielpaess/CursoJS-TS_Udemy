function criaPessoa (nome, sobrenome, idade) {//passados os parâmetros em parentêses (nome, sobrenome, idade)
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);//passados os argumentos que preenchem os parâmetros
const pessoa2 = criaPessoa('Gabriel', 'Oliveira', 25);
const pessoa3 = criaPessoa('Maria', 'Moreira', 25);
const pessoa4 = criaPessoa('Jean', 'Lara', 25);
const pessoa5 = criaPessoa('Junior', 'Otávio', 25);

console.log(pessoa1.nome, pessoa2.nome);

//padrão factory, fábrica de objetos





const pessoa6 = {//criação do objeto pessoa6
    nome:'Luiz',
    sobrenome:'Miranda',
    idade: 25,

    fala() {//método fala()
        console.log(`A minha idade atual é ${this.idade}.`)//quando criado o método e colocado {this}, refere-se ao objeto.
    },

    incrementaIdade() {//método incrementaIdade()
        this.idade++;
    }
};

pessoa6.fala();//chamada dos métodos
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();