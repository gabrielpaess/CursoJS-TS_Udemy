//factory function (função fábrica)
// constructor function (função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto = 'falando sobre NADA.') {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const p2 = criaPessoa('Angelo', 'Otavio', 1.9, 91);
const p3 = criaPessoa('Gabriel', 'Otavio', 1.7, 69);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);