const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');//pegamos o id do html e trazemos para o js utilizando o getElementById.

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número é: ${numero}.</p>`;
texto.innerHTML = `<p>Raiz quadrada: ${(numero ** 0.5)}.</p>`;
texto.innerHTML += `<p>É inteiro: ${(Number.isInteger(numero))}.</p>`;
texto.innerHTML += `<p>É NaN: ${(Number.isNaN(numero))}.</p>`;
texto.innerHTML += `<p>Arredondando pra baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${(numero.toFixed(2))}.</p>`;