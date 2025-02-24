// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p')
paragrafos.forEach((item) => {
    console.log(item)
})

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
    console.log(item.innerText)
})

 // CÓDIGO ERRADO - ESTAVA FALTANDO FECHAR PARÊNTESES
// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img')
// imgs.forEach(item, index => {
//      console.log(item,index);
//  }

// CÓDIGO CORRIGIDO
const imgs = document.querySelectorAll('img')
imgs.forEach((item, index) => {
    console.log(item, index)
})

// CÓDIGO ERRADO - ESTAVA FALTANDO ABRIR PARÊNTESES ()
// let i = 0;
// imgs.forEach( => {
//     console.log(i++)
// })

// CÓDIGO CORRIGIDO
let i = 0;
imgs.forEach(() => {
    console.log(i++)
})