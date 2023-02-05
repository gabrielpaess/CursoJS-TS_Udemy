//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
//const tresHoras = 60 * 60 * 3 * 1000;// * 1000 pois o tipo do tempo é em milisegundos
//const umDia = 60 * 60 * 24 * 1000;//adiciona um dia
//const data = new Date(0 + tresHoras + umDia);
//console.log(data.toString());
//QUANDO O VALOR NÃO É PASSADO, PEGA O PRIMEIRO VALOR VÁLIDO. QUE NA MAIORIA DAS VEZES É 00
//OS MESES SÃO DE 0 A 11.


//                    ano mes dia hora min seg milésimos
const data = new Date(2019, 3, 20, 15, 14, 27, 500);//VERIFICANDO EM NUMBER
console.log(data.toString());

// PASSANDO AGORA PARA VARCHAR
const data2 = new Date('2019-04-20 20:20:59');
console.log('Dia', data2.getDate());
console.log('Mês', data2.getMonth());// Mês começa do zero
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Min', data2.getMinutes());
console.log('Seg', data2.getSeconds());
console.log('ms', data2.getMilliseconds());
console.log('Dia Semana', data2.getDay());// 0 - Domingo, 6 - Sábado.
console.log(data2.toString());
console.log(Date.now());



//criando uma função onde trata o recebimento da hora e mostra no log.

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data3) {
    const dia = zeroAEsquerda(data3.getDate());
    const mes = zeroAEsquerda(data3.getMonth() + 1);
    const ano = zeroAEsquerda(data3.getFullYear());
    const hora = zeroAEsquerda(data3.getHours());
    const min = zeroAEsquerda(data3.getMinutes());
    const seg = zeroAEsquerda(data3.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);