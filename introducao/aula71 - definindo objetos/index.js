// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', { //definePropery define as propriedades de apenas um objeto
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable:false, // pode alterar
        configurable: true // configurável, apagar ou alterar
    });

    Object.defineProperty(this, 'estoque', { //definePropery define as propriedades de apenas um objeto
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable:true, // pode alterar
        configurable: false // configurável, apagar ou alterar
    });

    Object.defineProperties(this, { //define as propriedades de vários obj
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable:true, // pode alterar
            configurable: true // configurável, apagar ou alterar
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable:true, // pode alterar
            configurable: true // configurável, apagar ou alterar
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}