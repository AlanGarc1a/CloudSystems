//feature section
const faders = document.querySelectorAll('.u-fade-in');

//pricing section
const cards = document.querySelectorAll('.card');

const fadeInOptions = { 
    threshold: 0.25,
    rootMargin: " 0px 0px -125px 0px"
};

const cardOptions = {
    threshold: 0.15,
    rootMargin: " 0px 0px -95px 0px"
};

//fadeIn callback for feature section
function fadeIn(entries, observer) {
    entries.forEach( entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('u-fade-in-appear');
            showOnScroll.unobserve(entry.target);
        }
    });
}

//animation callback for pricing section
function cardAnimation(entries, observer) {
    entries.forEach( entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('u-slideInFromBottom', 'u-fade-in-appear');
            cardShow.unobserve(entry.target);
        }
    });
}

//for the feature section
const showOnScroll = new IntersectionObserver(fadeIn, fadeInOptions);

//for the pricing section
const cardShow = new IntersectionObserver(cardAnimation, cardOptions);

/*  observe that current individual fader */
faders.forEach( fader => {
    showOnScroll.observe(fader);
});

/* observe the cards coming into the viewport */
cards.forEach( card => {
    cardShow.observe(card);
});

//navigation slider 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const body = document.querySelector('body');

    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        if(!body.classList.contains('u-body-hidden')){
            body.classList.add('u-body-hidden');
        }
        else {
            body.classList.remove('u-body-hidden');
        }
        //burger animation
        burger.classList.toggle('toggle');
    });

}

//invoke navSlide
navSlide();