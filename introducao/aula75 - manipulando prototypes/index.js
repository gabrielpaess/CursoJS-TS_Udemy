// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto: Object.prototype
};

const objB = {
    chaveB: 'B'
    //__proto: ObjA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

//Criando produto com aumento e desconto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

const p3 = Object.create(Produto.prototype);
p3.preco = 113;
p3.aumento(10);

const p4 = Object.create(Produto.prototype, {
    preco: {
        writable:true,
        configurable: true,
        enumerable: true,
        value: 93
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});
p4.aumento(10);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);