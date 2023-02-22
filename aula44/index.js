// TRY - TENTAR RODAR UM BLOCO
// CATCH
// THROW

function soma(x, y) {
    if(
        typeof x !== 'number' || typeof y !== 'number'
    ) {
        throw new Error('X e Y precisam ser números')
    }

    return x + y;
}
//TRY TENTA EXECUTAR, CASO NÃO TENHA ERRO APARECE NORMAL. CASO TENHA ERRO CAI NO CATCH.
try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log(error);
    console.log('Algum erro deve aparecer caso caia no erro.')
}
