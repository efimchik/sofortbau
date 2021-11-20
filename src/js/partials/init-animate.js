const itemsAnimate = document.querySelectorAll('.js-scroll');


const scrollAnimation = function() {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;

    itemsAnimate.forEach(function(el) {
        let scrollOffset = el.offsetTop - (el.offsetHeight / 8);

        // console.log(scrollOffset);

        if(windowCenter >= scrollOffset) {
            el.classList.add('js-init-animation');
        }
    });
}

scrollAnimation();

window.addEventListener('scroll', function() {
    scrollAnimation();
});