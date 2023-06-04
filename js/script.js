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
})