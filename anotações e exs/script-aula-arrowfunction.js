const imgs = document.querySelectorAll("img");

imgs.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// forEach e Array
// For each é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é tranformá-los em uma array
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

// Arrow Function
// Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow (=>) após os argumentos.
const imgs = document.querySelectorAll("img");

imgs.forEach((item) => {
  console.log(item);
});
