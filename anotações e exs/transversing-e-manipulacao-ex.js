// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const copiaMenu = menu.cloneNode(true);
copy.appendChild(copiaMenu);

// Selecione o primeiro DT da dl de Faq
const dlFaq = document.querySelector(".faq dl");
const primeiroDT = dlFaq.children[0];

// Selecione o DD referente ao primeiro DT
const primeiroDD = primeiroDT.nextElementSibling;

// Substitua o conteúdo HTML de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");
faq.replaceChild(animais);
