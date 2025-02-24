// Height e Width
// Estas são propriedades e métodos dos objets Element e HTMLElement, a maioria delas são read only

const section = document.querySelector(".animais");

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

//offsetTop e offsetLeft

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

//Distância entre o canto esquerdo do elemento e o canto esquerdo da página
section.offsetLeft;

//getBoundingClientRect()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// Window
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também, pega a janela inteira
window.innerHeight; // height do janela interna
window.outerHeight; // soma a barra de endereço, janela inteira

window.scrollY; // distância total do scroll horizontal
window.scrollX; // distância total do scroll vertical

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}

// matchMedia();
// Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia("(max-width: 600px)");
if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}
