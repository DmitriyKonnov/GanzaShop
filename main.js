const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const filter = document.querySelector('.filter');
const navHeight = nav.offsetHeight;
const headerHeight = header.offsetHeight;
const filterHeight = filter.offsetHeight;
const arrow = document.querySelector('#arrow');

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if ( scrollDistance >= headerHeight + filterHeight) {
        nav.classList.add('nav__scroll');
    } else {
        nav.classList.remove('nav__scroll');
    }
})

arrow.addEventListener('click', () =>filter.scrollIntoView({
    block: 'start',
    behavior:'smooth'
}))