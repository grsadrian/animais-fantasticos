// innerHTML e innerText
/* O innerText elimina as tags, enquanto o innerHTML traz o conteúdo com as tags e também renderiza elas caso queira colocar um valor */
const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");
h1.innerHTML = "<p>Novo título</p>";

console.log(animaisLista.innerHTML);

// Transversing
/* Como navegar pelo DOM, utilizando propriedades e métodos */
const lista = document.querySelector(".animais-lista");
lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos (array-like)
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll("li"); // todas as LI's
lista.querySelector("li:last-child"); // último filho

// Element vs Node
/* Element's representam um elemento HTML, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais */

lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child
// Geralmente estamos atrás de um elemento e não de qualquer node em si.

// Manipulando Elementos
/* É possível mover elementos no DOM com métodos de Node */
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

contato.appendChild(lista); // move a lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de tudo
contato.removeChild(titulo); // remove o título de contato
contato.replaceChild(lista, titulo); // substitui o título por lista

// Novos Elementos
/* Podemos criar novos elementos com o método createElement() */

const animais = document.querySelector(".animais");

const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo Título";
novoH1.classList.add("titulo");

animais.appendChild(novoH1);

// Clonar Elementos
/* Todo elemento selecionado é único. Para criarmos um elemento baseado no anterior, é necessário utilizar o método cloneNode() */
const titulo2 = document.querySelector("h1");
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
const Contato = document.querySelector(".contato");
contato.appendChild(cloneTitulo);
// true sinaliza para incluir os filhos
