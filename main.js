const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const filter = document.querySelector('.filter');
const navHeight = nav.offsetHeight;
const headerHeight = header.offsetHeight;
const filterHeight = filter.offsetHeight;
console.log(filterHeight)

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if ( scrollDistance >= headerHeight + filterHeight) {
        nav.classList.add('nav__scroll');
    } else {
        nav.classList.remove('nav__scroll');
    }
})