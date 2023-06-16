//defineProperty -> getter e setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable:true, //mostra a chave
        configurable:true, //configuravel
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Bad value');
            }

            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
//console.log(p1);
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);