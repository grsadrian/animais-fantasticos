// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img')
 console.log(img.offsetWidth)

// Retorne a soma da largura de todas as imagens
// const imgs = document.querySelectorAll('img')
// imgs.forEach((item, index) => {
//     console.log(index, item.clientWidth)
// })

const imgRect = img.getBoundingClientRect();
console.log(imgRect.top)