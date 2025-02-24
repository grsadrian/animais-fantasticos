// classList
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector(".menu");

menu.className; // string
menu.classList; // lista de classes
menu.classList.add("ativo"); // adiciona classe
menu.classList.add("ativo", "mobile"); // adiciona duas classes
menu.classList.remove("ativo"); // remove classe
menu.classList.toggle("ativo"); // adiciona/remove a classe SE TIVER classe ele remove, SE NÃO TIVER ele adiciona
menu.classList.contains("ativo"); // true or false
menu.classList.replace("ativo", "inativo"); // substitui uma classe por outra

// attributes
// Retorna uma array-like com os atributos do elemento.

// const animais = document.querySelector(".animais");

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primero atributo

// getAttribute e setAttribute
// Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector("img");

img.getAttribute("src"); // valor do src
img.setAttribute("alt", "Texto Alternativo"); // muda o alt
img.hasAttribute("id"); // true or false
img.removeAttribute("alt"); // remove o alt
img.hasAttributes(); // true or false se tem algum atributo
// É muito comum métodos de get e set;

// Read Only vs Writable
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais = document.querySelector(".animais");

animais.className; // string com o nome das classes
animais.className = "azul"; // substitui completamente a string
animais.className += " vermelho"; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only
// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''
