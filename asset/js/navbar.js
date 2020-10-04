// variables
let burger = document.querySelector(".burger");
let nav = document.querySelector(".navLinks");
let navLinks = document.querySelectorAll(".navLinks li");
let scrollTop = document.documentElement.scrollTop;
//let photoScene = doncument.querySelector(".photoScene");

//let intElemScrollTop = photoScene.scrollTop;
//console.log(intElemScrollTop);

// fonction slide
let navSlide = () => {
    burger.addEventListener('click', () => {
        //ouverture burger
        nav.classList.toggle('navActive')

        //animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        })

        //barre burger
        burger.classList.toggle('toggle');
    });
}

// fonction au scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    //valeur du scroll top
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 10) {
        console.log(scrollTop);
        console.log("supp a 10");
        //nav.style.backgroundColor = "black";
    } else if (scrollTop >= 0 || scrollTop <= 10) {
        //nav.style.backgroundColor = "none";
        console.log("inf a 10");
    }


}

let navBackground = () => {


}

// action fonctions
navSlide();
navBackground();