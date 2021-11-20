"use strict";

var itemsAnimate = document.querySelectorAll('.js-scroll');

var scrollAnimation = function scrollAnimation() {
  var windowCenter = window.innerHeight / 2 + window.scrollY;
  itemsAnimate.forEach(function (el) {
    var scrollOffset = el.offsetTop - el.offsetHeight / 8; // console.log(scrollOffset);

    if (windowCenter >= scrollOffset) {
      el.classList.add('js-init-animation');
    }
  });
};

scrollAnimation();
window.addEventListener('scroll', function () {
  scrollAnimation();
});