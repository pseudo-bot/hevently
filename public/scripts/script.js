var navbar = document.querySelector('.navbar-bg');
var cover = document.querySelector('.cover');

var options = {
	rootMargin: '-64px 0px 0px 0px',
};

var intersection = new IntersectionObserver((entries) => {
	entries.forEach((e) => {
		if (e.isIntersecting) {
			if (!navbar.classList.contains('inner-cover')) {
				navbar.classList.add('inner-cover');
			}
		} else {
			if (navbar.classList.contains('inner-cover')) {
				navbar.classList.remove('inner-cover');
			}
		}
	});
}, options);

intersection.observe(cover);
