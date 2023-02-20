/*Abre e fecha menu lateral em modo mobile*/

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active")
});

/* Fecha o menu quado clicar em algum item em muda o icone para list*/

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})

// Animar todos os intens na tela que tiverem meu atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach((element) => {
        if ( windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate"); 
        }
    });
};

animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
})

//Ativar carregamento do botão enviar fomulário para

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarCarregando = document.querySelector('#btn-enviar-carregando')

btnEnviar.addEventListener("click", ()=>{
    btnEnviarCarregando.style.display = "block";
    btnEnviar.style.display = "none"
})

//Tira mensagem de sucesso de envio de email depois de 5 segundos

setTimeout(() =>{
    document.querySelector('#alerta').style.display = "none"
}, 5000)