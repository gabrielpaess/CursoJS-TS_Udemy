// ? :                      ********OPERADORES TERNÁRIOS*********
// (condicao) ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUsuario = 900;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Preta';
const corPadrao = corUsuario || 'Branca';

console.log(nivelUsuario, corPadrao);







//if (pontuacaoUsuario => 1000) {
//    console.log('Usuário VIP');
//} else {
//    console.log('Usuário Normal');
//}