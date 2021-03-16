function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    window.addEventListener('scroll', toggleSticky)

    const nav = document.querySelector('nav');
    const featuresSection = document.querySelector('.section-features');
    const featuresContainer = document.querySelector('.features__container');
    const stepsSection = document.querySelector('.section-steps');
    const stepsAppImg = document.querySelector('.section-steps .app-screen');
    const citiesSection = document.querySelector('.section-cities');
    const citiesContainer = document.querySelector('.cities__container');

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function toggleSticky() {
        if (window.pageYOffset > (featuresSection.offsetTop - 60)) {
            nav.classList.add('sticky');
            featuresContainer.classList.add('animate__animated', 'animate__fadeIn')
        } else {
            nav.classList.remove('sticky');
            featuresContainer.classList.remove('animate__animated', 'animate__fadeIn')
        }

        if (window.pageYOffset > stepsSection.offsetTop) {
            stepsAppImg.classList.add('animate__animated', 'animate__pulse')
        } else {
            stepsAppImg.classList.remove('animate__animated', 'animate__pulse')
        }

        if (window.pageYOffset > citiesSection.offsetTop) {           
            citiesContainer.classList.add('animate__animated', 'animate__fadeIn')
        } else {    
            citiesContainer.classList.remove('animate__animated', 'animate__fadeIn')
        }
    }


    const menuBtn = document.querySelector('.mobile-nav-icon');
    const mainNav = document.querySelector('.main-nav');
    const menuIcon = document.querySelector('.mobile-nav-icon ion-icon')
    menuBtn.addEventListener('click', () => {
        if (mainNav.classList.contains('open')) {       
            menuIcon.setAttribute('name', 'menu');
        } else {
            menuIcon.setAttribute('name', 'close');
        }
        mainNav.classList.toggle('open');
    })
})