
/*---------------------------------------------
Template name: .
Version: 1.0.0

[Table of Content]
----------------------
01: Preloader
02: Mixit UP
03: Lity
04: Swiper Slider
05: Back to Top
06: back to top button animate
----------------------------------------------*/

(function($) {
    "use strict";


	/* ======= STICKY MENU ======= */
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("header").addClass('sticky-menu');
		} else {
			$("header").removeClass('sticky-menu');
		}
	});

	/* ====== SHOW & HIDE MENU ====== */
	$(".menu-show-hide-btn").click(function () {
		$("nav .main-menu").toggleClass("open-menu");
	});

	/* ===== WOW JS ===== */
	new WOW().init();


})(jQuery);
