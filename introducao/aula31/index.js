//DIFERENÇAS ENTRA VAR E LET

const verdadeira = true;

//Let tem escopo de bloco {...bloco}
//Var só tem escopo de função

let nome = 'Luiz'; //criando
var nome2 = 'Luiz';//criando

if (verdadeira) {
    let nome = 'Otávio';//criando
    var nome2 = 'Rogério';//redeclarando

    if (verdadeira) {
        var nome2 = 'Ronaldo';//redeclarando
        let nome  = 'Outra coisa';
    }
}

console.log(nome, nome2);

function falaOi() {
    if(verdadeira) {
        let nome = 'Luiz';
        var sobrenome = 'Miranda';
    }
    console.log(sobrenome);
}
falaOi();

//QUANDO O TIPO VAR É DECLARADO APÓS O CONSOLE OU CHAMADA DO MESMO, ACONTECE O EVENTO CHAMADO HOISTING, ONDE A VARIAVEL FICA COM RETORNO UNDEFINED.