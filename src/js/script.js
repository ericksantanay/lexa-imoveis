let menuB = document.getElementById('menuBurguer')

function ClickMenu() {
    if (menuMobile.style.display == 'block') {
        menuMobile.style.display = 'none'
        menuB.innerText = 'menu'
    }else {
        menuMobile.style.display = 'block'
        menuB.innerText = 'close'
    }
}


//##########################
//EFEITO SCROLL
//#########################
const elementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('ativo');   // aparece
        } else {
            entrada.target.classList.remove('ativo'); // some ao sair — permite repetir
        }
    });
}, { threshold: 0.15 }); // 15% do elemento visível já ativa

elementos.forEach(el => observer.observe(el));

