/* Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links */
const linksInternos = document.querySelectorAll('a[href^="#"]');
function handleLinks(event) {
  event.preventDefault();
  let link = event.target;
  linksInternos.forEach((item) => {
    item.classList.remove("ativo");
  });
  link.classList.add("ativo");
}

linksInternos.forEach((item) => {
  item.addEventListener("click", handleLinks);
});

/* Selecione todos os elementos do site começando a partir do body, ao clique mostre exatementes quais elementos estão sendo clicados */

/* Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado */
const elements = document.querySelectorAll("body *");

function handleElements(event) {
  //   console.log(event.target.innerText); // EX. Anterior
  //   event.target.remove();
}

elements.forEach((item) => {
  item.addEventListener("click", handleElements);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site

function handleClickT(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);
