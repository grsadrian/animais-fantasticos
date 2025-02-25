// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector("img");
console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens
onload = () => {
  const imgs = document.querySelectorAll("img");
  let totalLargura = 0;
  imgs.forEach((item) => {
    totalLargura += item.offsetWidth;
  });
  console.log(totalLargura);
};

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o Google)
const links = document.querySelectorAll("a");
links.forEach((item, index) => {
  console.log(`${index + 1} ${item.offsetWidth} x ${item.offsetHeight}`);
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");
if (innerWidth < 720) {
  menu.classList.add("menu-mobile");
}
