//escopo lexico
const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}
usaFalaNome();

//primeiro a função procura a variavel nome dentro do seu escopo, ao não encontrar, sobe um nivel, no caso global.