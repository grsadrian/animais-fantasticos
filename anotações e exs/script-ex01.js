// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
imagens.forEach((imagem) => {
  console.log(imagem);
});

// Retorne no console apenas as imagens que começam com a palavra imagem
const iniciaComImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(iniciaComImagens);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');

// Selecione o primeiro h2 dentro de.animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");

// Selecione o último p do site
const ultimoP = document.querySelector("p");
console.log(ultimoP[ultimoP.length - 1]);
