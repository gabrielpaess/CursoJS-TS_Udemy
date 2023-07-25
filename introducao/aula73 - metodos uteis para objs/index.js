/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
...(spread)
*/

const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana'};

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}