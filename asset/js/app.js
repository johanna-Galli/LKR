let navSlide = () => {

    let burger = document.querySelector(".burger");
    let nav = document.querySelector(".navLinks");
    let navLinks = document.querySelectorAll(".navLinks li")


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


navSlide();