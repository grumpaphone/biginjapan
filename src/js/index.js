function toggleMobileMenu(menu) {
	menu.classList.toggle('open');
	document.body.classList.toggle('lock-scroll');
}

// window.onload = function () {
// 	window.addEventListener('scroll', function (e) {
// 		if (window.pageYOffset > 100) {
// 			document.querySelector("body").classList.add('lock-scroll');
// 		} else {
// 			document.querySelector("body").classList.remove('lock-scroll');
// 		}
// 	});

// const menu_btn = document.querySelector('.hamburger-icon');
// const mobile_menu = document.querySelector('.mobile-menu');

// menu_btn.addEventListener('click', function () {
// 	menu_btn.classList.toggle('is-active');
// 	mobile_menu.classList.toggle('is-active');
// });
