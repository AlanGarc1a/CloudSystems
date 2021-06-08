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

//carousel
const customers = document.querySelector('.customers');
const slides = [...customers.children];

const prevBtn = document.getElementById('#prevBtn');
const nextBtn = document.getElementById('#nextBtn');

nextBtn.addEventListener('click', () => {
    const currentSlide = document.querySelector('.u-active');
    let nextSlide = currentSlide.nextElementSibling;

    if(currentSlide.nextElementSibling === null) {
        nextSlide = customers.children[0];
    }
    
    currentSlide.classList.remove('u-active');
    currentSlide.classList.add('u-unactive');
    currentSlide.classList.add('u-slider-x');
    nextSlide.classList.remove('u-unactive');
    nextSlide.classList.add('u-active');
    nextSlide.classList.add('u-slider-x');
});

prevBtn.addEventListener('click', () => {
    const currentSlide = document.querySelector('.u-active');
    let prevSlide = currentSlide.previousElementSibling;

    if(currentSlide.previousElementSibling === null) {
        prevSlide = customers.children[customers.children.length - 1];
    }
    
    currentSlide.classList.remove('u-active');
    currentSlide.classList.add('u-unactive');
    currentSlide.classList.add('u-slider-neg-x');
    prevSlide.classList.add('u-unactive');
    prevSlide.classList.add('u-active');
    prevSlide.classList.add('u-slider-neg-x');
});