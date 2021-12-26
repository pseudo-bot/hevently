var navbar = document.querySelector('.navbar');
var cover = document.querySelector('.cover');

var options = {
	rootMargin: '-64px 0px 0px 0px',
};

var intersection = new IntersectionObserver((entries) => {
	entries.forEach((e) => {
		if (e.isIntersecting) {
			if (!navbar.classList.contains('in-cover')) {
				navbar.classList.add('in-cover');
			}
		} else {
			if (navbar.classList.contains('in-cover')) {
				navbar.classList.remove('in-cover');
			}
		}
	});
}, options);

intersection.observe(cover);
