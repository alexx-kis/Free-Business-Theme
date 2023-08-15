'use strict';

/*==================================== SLIDER ====================================*/

$(function () {
	$('.hero__slider').slick({
		arrows: false,
		slidesToShow: 1,
		infinite: true,
		dragable: false,
		waitForAnimate: false,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		appendDots: ('.hero__slider-dots'),
	})
});

/*==================================== BURGER ====================================*/

let burger = document.querySelector('.burger');
let side = document.querySelector('.header__side');
let burgerLinks = document.querySelectorAll('.header__side-link');


burger.addEventListener('click', function () {
	side.classList.toggle('header__side--open');
	burger.classList.toggle('burger--open');
});

burgerLinks.forEach(function(link) {
	link.addEventListener('click', function () {
		burger.classList.remove('burger--open');
		side.classList.remove('header__side--open');
		
	});
})


/*==================================== ANIMATION ====================================*/

window.onload = function () {
	let loadings = document.querySelectorAll('.loading');

	for (let loading of loadings) {
		loading.classList.add('loaded');
	}
};

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];
			let animItemHeight = animItem.offsetHeight;
			let animItemOffset = offset(animItem).top;
			let animStart = 10
			let animItemPoint = window.innerHeight - (animItemHeight / animStart);

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))) {
				animItem.classList.add('anim-item--active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('anim-item--active');
				}
			}

			function offset(elem) {
				let rect = elem.getBoundingClientRect(),
					scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
			}
		}
	}
}
