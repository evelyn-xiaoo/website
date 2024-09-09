let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || this.document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop) {
        navbar.style.top = '-75px';
    }
    else {
        navbar.style.top = "0px";
    }
    lastScrollTop = scrollTop;
})