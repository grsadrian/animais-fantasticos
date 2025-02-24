// Adicione a classe ativo a todos os itens do menu
const menuItem = document.querySelectorAll(".menu li");
menuItem.forEach((item) => {
  item.classList.add("ativo");
});

// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItem.forEach((item, index) => {
  if (index !== 0) {
    item.classList.remove("ativo");
  }
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((item, index) => {
  if (item.hasAttribute("alt")) {
    console.log(`A imagem no index ${index} possui atributo alt`);
  } else {
    console.log(`A imagem no indíce ${index} não possui o atributo alt`);
  }
});

// Modifique o href do link externo do menu
const linkExterno = document.querySelector('a[href^="https://"]');
linkExterno.setAttribute("href", "https://www.instagram.com");
