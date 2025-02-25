// addEventListener
// Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que um certo evento ocorrer neste elemento.
const img = document.querySelector("img");

//elemento.addEventListener(event, callback, options)
img.addEventListener("click", function () {
  console.log("clicou");
});
// O terceiro argumento é opcional

// Callback
/* É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima */
function callback() {
  console.log("clicou");
}

img.addEventListener("click", callback); // Deve-se passar apenas o nome da função, sem ativá-la com os parênteses.
img.addEventListener("click", callback()); // undefined

// Event
/* O primeiro parâmetro do callback é referente ao evento que ocorreu. */

function callback(event) {
  console.log(event);
}
/* Geralmente utilizam e como nome do parâmetro */

// Propriedades do Event
const animaisLista = document.querySelector(".animais-lista");

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this, referente ao item que adicionou o evento
  const target = event.target; // onde o clique ocorreu, exatamente o ponto
  const type = event.type; // tipo de evento
  const path = event.path; //
}

// event.preventDefault()
/* Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá prevenir que o link seja ativado. */
const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", clickNoLink);

// this
/* A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEvenetListener foi adicionado */
// function callback(event) {
//   console.log(this); // retorna a imagem, (img)
//   console.log(this.getAttribute("src"));
// }

img.addEventListener("click", callback);
// Geralmente é igual à propriedade currentTarget

// Keyboard
/* Pode-se adicionar atalhos para facilitar a navegação no site, através de eventos do keyboard */

function handleKeyboard(event) {
  if (event.key === "a") document.body.classList.toggle("azul");
  else if (event.key === "v") document.body.classList.toggle("vermelho");
}

window.addEventListener("keydown", callback);

// forEach e Eventos
/* O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles */
const imgs = document.querySelectorAll("img");
function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc);
});
