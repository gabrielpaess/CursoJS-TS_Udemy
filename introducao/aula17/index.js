function saudacao(nome)//parametros     
                            {
    return `Bom dia ${nome}!`;//pode ou não retornar o resultado
}

const variavel = saudacao('Luiz');//pode ou não ser armazenado em uma variável.
console.log(variavel);//pode ou não aparecer no log.



function soma (x = 1, y = 2)//podem ser deixados valores padrão quando não forem declarados na chamada da função.
                             {
    const resultado = x + y;
    console.log('Olá mundo!');
    return resultado;
    //console.log('Hello world'); o que esta abaixo do return não é executado.
}

const resultado = soma(2, 2);//se aqui for chamada a função sem o preenchimento dos parâmetros, o mecanismo do js, vai preencher com os valores padrão, declarados na parametrização.
console.log(resultado);




//calculando raiz
const raiz = function (n) {//função normal
    return n ** 0.5;
};

//calculando raiz
const raiz2 = (n) =>  n ** 0.5;//arrow function

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

console.log(raiz2(81));
console.log(raiz2(100));
console.log(raiz2(121));