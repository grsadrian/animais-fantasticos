// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
imagens.forEach((imagem) => {
  console.log(imagem);
});

// Retorne no console apenas as imagens que começam com a palavra imagem
const iniciaComImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(iniciaComImagens);
