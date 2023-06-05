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
		// responsive:
		// 	[
		// 		{
		// 			breakpoint: 1100,
		// 			settings: {
		// 				slidesToShow: 3,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 750,
		// 			settings: {
		// 				slidesToShow: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 550,
		// 			settings: {
		// 				slidesToShow: 1,
		// 				dragable: true,
		// 			}
		// 		},
		// 	],
		dots: true,
		appendDots: ('.hero__slider-dots'),
	})
});

/*==================================== BURGER ====================================*/

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
let burgerLinks = document.querySelectorAll('.header__menu-link');


burger.addEventListener('click', function () {
	menu.classList.toggle('header__menu--open');
	burger.classList.toggle('burger--open');
});

burgerLinks.forEach(function(link) {
	link.addEventListener('click', function () {
		burger.classList.remove('burger--open');
		menu.classList.remove('header__menu--open');
		
	});
})

// for (let link of burgerLinks) {
// 	link.addEventListener('click', function () {
// 		burger.classList.remove('burger--open');
// 	});
// }