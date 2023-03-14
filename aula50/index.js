//enviando parametros indeterminados
// argumentos que sustenta todos os argumentos enviados
function funcao(a, b, c, d, e, f) {// parametros
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7); //argumentos
//quando não for passado o argumento, ficada por padrão UNDEFINED.


//Atribuição via desestruturação
function funcao2([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao2(['Gabriel', 'Pinheiro', 27]);



//rest operator ..., deve ser sempre o ultimo parametro
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}
conta('/', 1, 20, 30, 40, 50);

//rest operator com arrow function
const conta2 = (...args) => {
    console.log(args);
};
conta2('+', 1, 20, 30, 40, 50);