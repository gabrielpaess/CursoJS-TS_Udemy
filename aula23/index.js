/*
&& -> false & true -> false 'o valo mesmo'
|| ->

FALSY (fingem ser valores falsos)
false
0
'' "" ``
null / undefined
Nan
*/

//exemplo AND = &&

function falaOi() {
    return 'Oi';
}//true

const vaiExecutar = 'Joãozinho';//true

console.log(vaiExecutar && falaOi());//retornou a ultima condição.



//exemplo OR = ||
//ex 1
console.log(0 || false || null || 'Luiz Otávio' || true);//retorna o primeiro valor true, verdadeiro;

//ex 2
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';//retorna a primeira variável true

console.log(corPadrao);

//ex 3
const a = 0;
const b = null;
const c = 'false';//retornou este, pois o valor esta em varchar. Não é validado como false. Caso fosse igual a variável d, retornaria o último valor declarado no console que é NaN (e).
const d = false;
const e = NaN;

console.log(a|| b || c || d|| e);
