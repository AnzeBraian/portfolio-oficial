


let typed = new Typed('.input-change',{
    strings:['Front-End Developer!', 'Freelancer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
});


const menuButton = document.querySelector('.nav__button');
const closeButton = document.querySelector('.close__button');
const navContainer = document.querySelector('.nav__container');


menuButton.addEventListener('click', ()=>{
    navContainer.classList.add('enter');
})

closeButton.addEventListener('click', ()=>{
    navContainer.classList.remove('enter');
})



const modelFig = document.querySelector('.models__img')
const modelFigure = document.querySelectorAll('.models__img');
const showClose = document.querySelector('.show__close');
const showContainer = document.querySelector('.show__container');
const showImg = document.querySelector('.show__img')

console.log(showImg.src)


modelFigure.forEach(modF => 
    modF.addEventListener('click', ()=>{
        console.log(modF.src);
        showImg.src = modF.src;
        showContainer.classList.add('mostrar')
        
    }))

showClose.addEventListener('click', ()=>{
    showContainer.classList.remove('mostrar')
})

ScrollReveal().reveal('.main__about',{delay:500});
ScrollReveal().reveal('.main__skills',{delay:500});
ScrollReveal().reveal('.main__services',{delay:500});
ScrollReveal().reveal('.main__models',{delay:500});
ScrollReveal().reveal('.footer__contact',{delay:500});

